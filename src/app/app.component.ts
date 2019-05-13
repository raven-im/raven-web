import { Component, OnInit } from '@angular/core';
import { SocketService } from './chat/shared/services/socket.service';
import { UsersOutParam } from './chat/shared/model/usersOutParam';
import { com } from 'assets/message';
import { Conversation } from './chat/shared/model/conversation';
import { ContactService } from './chat/shared/services/contact.service';

@Component({
  selector: 'tcc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contacts: UsersOutParam[] = [];
  conversations: Conversation[] = [];
  constructor(
    private socketClient: SocketService,
    private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContacts();
    this.getConversations();
  }

  getContacts(): void {
    //get Contacts list.
    this.contacts = this.contactService.getUserList();
  }

  getConversations(): void {
    this.socketClient.emitter.subscribe((msg: com.raven.common.protos.RavenMessage) => {
      if (msg.converAck == null) {
        return;
      }
      msg.converAck.converList.forEach(convInfo => {
        if (this.socketClient.isLogin) {
          convInfo.uidList.forEach(uid => {
            if (uid != this.socketClient.loginUserId) {
              let conversation: Conversation = {
                convId: convInfo.converId,
                type: convInfo.type,
                groupId: convInfo.groupId,
                name: this.contactService.getUserDetail(uid).name,
                lastMsg: convInfo.lastContent.content,
                unReadCnt: +convInfo.unCount.toString(),
                time: new Date(+convInfo.lastContent.time.toString())
              }
              this.conversations.push(conversation);
            }
          });
        }
      });
    })
  }
}
