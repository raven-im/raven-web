import { Component, OnInit, ViewChildren, ViewChild, AfterViewInit, QueryList, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MatList, MatListItem } from '@angular/material';
// import { Message } from './shared/model/message';
import { User } from '../shared/model/user';
import { SocketService } from '../shared/services/socket.service';
import { DialogUserComponent } from '../dialog-user/dialog-user.component';
import { DialogUserType } from '../dialog-user/dialog-user-type';
import { com } from 'assets/message';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../shared/model/message';
import { ContactService } from '../shared/services/contact.service';


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


  // getting a reference to the overall list, which is the parent container of the list items
  @ViewChild(MatList, { read: ElementRef }) matList: ElementRef;

  // getting a reference to the items/messages within the list
  @ViewChildren(MatListItem, { read: ElementRef }) matListItems: QueryList<MatListItem>;

  constructor(
    private contactService: ContactService,
    private socketService: SocketService,
    private route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.initModel();

    this.socketService.emitter.subscribe((msg: com.raven.common.protos.RavenMessage) => {
      if (msg.upDownMessage != null) {
        if (msg.upDownMessage.fromUid === this.uid 
        || (msg.upDownMessage.fromUid === this.targetUser.uid && msg.upDownMessage.targetUid === this.uid)) {
          let message: Message = {
            from: msg.upDownMessage.fromUid == this.uid ? this.user : this.targetUser,
            content: msg.upDownMessage.content.content,
            time: new Date(+msg.upDownMessage.content.time.toString())
          }
          this.messages.push(message);
        }
      } else if (msg.hisMessagesAck != null) {
        this.messages.length = 0;
        msg.hisMessagesAck.messageList.forEach(msgItem => {
          let message: Message = {
            from: msgItem.uid == this.uid ? this.user : this.targetUser,
            content: msgItem.content,
            time: new Date(+msgItem.time.toString())
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

    this.socketService.sendSingleMessage(
      this.uid,
      this.targetUser.uid,
      com.raven.common.protos.MessageType.TEXT,
      message,
      null
    );
    this.messageContent = null;
  }
}
