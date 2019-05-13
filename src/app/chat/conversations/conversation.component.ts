import { Component, OnInit, ViewChildren, ViewChild, AfterViewInit, QueryList, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MatList, MatListItem } from '@angular/material';
// import { Message } from './shared/model/message';
import { User } from '../shared/model/user';
import { SocketService } from '../shared/services/socket.service';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';
import { DialogUserType } from '../dialog-user/dialog-user-type';
import { com } from 'assets/message';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../shared/services/rest.service';
import { Message } from '../shared/model/message';


const AVATAR_URL = 'https://api.adorable.io/avatars/285';

@Component({
  selector: 'tcc-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit, AfterViewInit {
  convId: string;
  user: User;
  targetUser: User;
  messages: Message[] = [];
  messageContent: string;
  dialogRef: MatDialogRef<DialogUserComponent> | null;
  defaultDialogUserParams: any = {
    disableClose: true,
    data: {
      title: 'Welcome',
      dialogType: DialogUserType.LOGIN
    }
  };


  // getting a reference to the overall list, which is the parent container of the list items
  @ViewChild(MatList, { read: ElementRef }) matList: ElementRef;

  // getting a reference to the items/messages within the list
  @ViewChildren(MatListItem, { read: ElementRef }) matListItems: QueryList<MatListItem>;

  constructor(
    private restClient: RestService,
    private socketService: SocketService,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.initModel();

    this.socketService.emitter.subscribe((msg: com.raven.common.protos.RavenMessage) => {
      if (msg.upDownMessage != null) {
        let message: Message = {
          from: msg.upDownMessage.fromUid == this.socketService.loginUserId ? this.user : this.targetUser,
          content: msg.upDownMessage.content.content,
          time: new Date(+msg.upDownMessage.content.time.toString())
        }
        this.messages.push(message);
      } else if (msg.hisMessagesAck != null) {
        msg.hisMessagesAck.messageList.forEach(msgItem => {
          let message: Message = {
            from: msgItem.uid == this.socketService.loginUserId ? this.user : this.targetUser,
            content: msgItem.content,
            time: new Date(+msgItem.time.toString())
          }
          this.messages.push(message);
        })
      } else if (msg.converAck.converInfo != null) {
        let randomId = this.getRandomId();
        let targetId;
        msg.converAck.converInfo.uidList.forEach(uid => {
          if (uid != this.socketService.loginUserId) {
            targetId = uid;
          }
        })
        this.restClient.getUserDetail(targetId).subscribe((result) => {
          this.targetUser = {
            uid: result.data.id,
            name: result.data.name,
            avatar: `${AVATAR_URL}/${randomId}.png`
          };
          this.socketService.getMessageList(this.convId, 0);
        });
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
    this.convId = this.route.snapshot.paramMap.get('id');
    let randomId = this.getRandomId();
    
    this.restClient.getUserDetail(this.socketService.loginUserId).subscribe((result) => {
      this.user = {
        uid: result.data.id,
        name: result.data.name,
        avatar: `${AVATAR_URL}/${randomId}.png`
      };
    });

    this.socketService.getDetailConversation(this.convId);
  }

  private getRandomId(): number {
    return Math.floor(Math.random() * (1000000)) + 1;
  }

  public onClickUserInfo() {
    this.openUserPopup({
      data: {
        username: this.user.name,
        title: this.user.name == null ? 'Welcome' : 'Profile',
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
      if (paramsDialog.dialogType === DialogUserType.LOGIN) {
      } else if (paramsDialog.dialogType === DialogUserType.LOGOUT) {
      }
    });
  }

  public sendMessage(message: string): void {
    if (!message) {
      return;
    }

    this.socketService.sendSingleMessage(
      this.socketService.loginUserId,
      this.targetUser.uid,
      com.raven.common.protos.MessageType.TEXT,
      message,
      null
    );
    this.messageContent = null;
  }
}
