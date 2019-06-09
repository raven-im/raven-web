import { Component, OnInit, ViewChildren, ViewChild, AfterViewInit, QueryList, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MatList, MatListItem } from '@angular/material';
// import { Message } from './shared/model/message';
import { User } from '../shared/model/user';
import { SocketService } from '../shared/services/socket.service';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';
import { DialogUserType } from '../dialog-user/dialog-user-type';
import { com } from 'assets/message';
import { ActivatedRoute } from '@angular/router';
import { Message, MsgType } from '../shared/model/message';
import { ContactService } from '../shared/services/contact.service';
import { FileMsg } from '../shared/messages/fileMessage';
import { RestService } from '../shared/services/rest.service';
import { TextMsg } from '../shared/messages/textMessage';


const AVATAR_URL = 'https://api.adorable.io/avatars/285';

@Component({
  selector: 'tcc-chat-detail',
  templateUrl: './chat.detail.component.html',
  styleUrls: ['./chat.detail.component.css']
})
export class ChatDetailComponent implements OnInit, AfterViewInit {
  targetId: string;
  uid: string; // login uid
  user: User;
  targetUser: User;
  messages: Array<Message>;
  messageContent: string;
  dialogRef: MatDialogRef<DialogUserComponent> | null;
  defaultDialogUserParams: any = {
    disableClose: true,
    data: {
      title: 'Welcome',
      dialogType: DialogUserType.LOGIN
    }
  };
  fileToUpload: File = null;

  // getting a reference to the overall list, which is the parent container of the list items
  @ViewChild(MatList, { read: ElementRef }) matList: ElementRef;

  // getting a reference to the items/messages within the list
  @ViewChildren(MatListItem, { read: ElementRef }) matListItems: QueryList<MatListItem>;

  constructor(
    private contactService: ContactService,
    private socketService: SocketService,
    private restService: RestService,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.initModel();

    this.socketService.emitter.subscribe((msg: com.raven.common.protos.RavenMessage) => {
      if (msg.upDownMessage != null) {
        if (msg.upDownMessage.fromUid === this.uid 
        || (msg.upDownMessage.fromUid === this.targetUser.uid && msg.upDownMessage.targetUid === this.uid)) {
          let message: Message;
          switch (msg.upDownMessage.content.type) {
            case com.raven.common.protos.MessageType.TEXT:
              let textMsg = TextMsg.fromJSON(msg.upDownMessage.content.content);
              message = {
                type: MsgType.TEXT,
                from: msg.upDownMessage.fromUid == this.uid ? this.user : this.targetUser,
                content: textMsg.getContent(),
                time: new Date(+msg.upDownMessage.content.time.toString())
              }
              break;
            case com.raven.common.protos.MessageType.PICTURE:
                let imgMsg = FileMsg.fromJSON(msg.upDownMessage.content.content);
                message = {
                  type: MsgType.IMAGE,
                  from: msg.upDownMessage.fromUid == this.uid ? this.user : this.targetUser,
                  content: imgMsg.getFileUrl(),
                  time: new Date(+msg.upDownMessage.content.time.toString())
                }
                break;
            case com.raven.common.protos.MessageType.VIDEO:
                break;
            case com.raven.common.protos.MessageType.VOICE:
                break;
            default:
              return;
          }
          this.messages.push(message);
        }
      } else if (msg.hisMessagesAck != null) {
        this.messages.length = 0;
        msg.hisMessagesAck.messageList.forEach(msgItem => {
          let message: Message;
          switch (msgItem.type) {
            case com.raven.common.protos.MessageType.TEXT:
                let textMsg = TextMsg.fromJSON(msgItem.content);
                message = {
                  type: MsgType.TEXT,
                  from: msgItem.uid == this.uid ? this.user : this.targetUser,
                  content: textMsg.getContent(),
                  time: new Date(+msgItem.time.toString())
                }
                break;
            case com.raven.common.protos.MessageType.PICTURE:
                let imgMsg = FileMsg.fromJSON(msgItem.content);
                message = {
                  type: MsgType.IMAGE,
                  from: msg.upDownMessage.fromUid == this.uid ? this.user : this.targetUser,
                  content: imgMsg.getFileUrl(),
                  time: new Date(+msg.upDownMessage.content.time.toString())
                }
                break;
            case com.raven.common.protos.MessageType.VIDEO:
                break;
            case com.raven.common.protos.MessageType.VOICE:
                break;
            default:
              return;
          }
          this.messages.push(message);
        })
      }
    })
  }

  ngAfterViewInit(): void {
    // subscribing to any changes in the list of items / messages
    this.matListItems.changes.subscribe(elements => {
      this.scrollToBottom();
    });
  }

  // auto-scroll fix: inspired by this stack overflow post
  // https://stackoverflow.com/questions/35232731/angular2-scroll-to-bottom-chat-style
  private scrollToBottom(): void {
    try {
      this.matList.nativeElement.scrollTop = this.matList.nativeElement.scrollHeight;
    } catch (err) {
    }
  }

  private initModel(): void {
    this.uid = this.socketService.loginUserId;
    this.messages = new Array<Message>();
    this.targetId = this.route.snapshot.paramMap.get('id');
    let randomId = this.getRandomId();
    
    this.user = {
      uid: this.uid,
      name: this.contactService.getUserDetail(this.uid).name,
      avatar: `${AVATAR_URL}/${randomId}.png`
    };

    randomId = this.getRandomId();
    this.targetUser = {
      uid: this.targetId,
      name: this.contactService.getUserDetail(this.targetId).name,
      avatar: `${AVATAR_URL}/${randomId}.png`
    };
  }

  private getRandomId(): number {
    return Math.floor(Math.random() * (1000000)) + 1;
  }

  public onClickUserInfo() {
    this.openUserPopup({
      data: {
        username: this.user.name,
        title: this.user.name == null ? 'Welcome' : 'Profile',
        name: this.user.name,
        dialogType: this.user.name == null ? DialogUserType.LOGIN : DialogUserType.LOGOUT
      }
    });
  }

  private openUserPopup(params): void {
    this.dialogRef = this.dialog.open(DialogUserComponent, params);
    this.dialogRef.afterClosed().subscribe(paramsDialog => {
      if (!paramsDialog) {
        return;
      }

      this.user.name = paramsDialog.username;
    });
  }

  public sendMessage(message: string): void {
    if (!message) {
      return;
    }
    let textMsg = new TextMsg(message);
    this.socketService.sendSingleMessage(
      this.uid,
      this.targetUser.uid,
      com.raven.common.protos.MessageType.TEXT,
      JSON.stringify(textMsg),
      null
    );
    this.messageContent = null;
  }

  public handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.restService.uploadFile(this.fileToUpload).subscribe(result => {
      console.log('upload result:', result.code);
      console.log('upload result:', result.data.url);
      //TODO 1 insert it to the message list
      this.sendImgMessage(result.data.name, result.data.size, result.data.url);
    }, error => {

    });
  }

  private sendImgMessage(name: string, size: number, url: string): void {
    let imgMsg = new FileMsg(name, size, url);
    this.socketService.sendSingleMessage(
      this.uid,
      this.targetUser.uid,
      com.raven.common.protos.MessageType.PICTURE,
      JSON.stringify(imgMsg),
      null
    );
  }
}
