import { Component, OnInit } from '@angular/core';
import { SocketService } from './chat/shared/services/socket.service';
import { RestService } from './chat/shared/services/rest.service';
import { UsersOutParam } from './chat/shared/model/usersOutParam';
import { com } from 'assets/message';
import { Conversation } from './chat/shared/model/conversation';

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
    private restClient: RestService) { }

  ngOnInit(): void {
    this.getContacts();
    this.getConversations();
  }

  getContacts(): void {
    //get Contacts list.
    if (this.socketClient.isLogin) {
      this.restClient.getUsers().subscribe((result) => {
        console.log("User list length:" + result.data.length);
        let loginUser = this.socketClient.loginUserId;
        result.data.forEach((contact) => {
          if (loginUser != contact.id) {
            this.contacts.push(contact);
          }
        });
      });
    }
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
              this.restClient.getUserDetail(uid).subscribe((result) => {
                let conversation: Conversation = {
                  convId: convInfo.converId,
                  type: convInfo.type,
                  groupId: convInfo.groupId,
                  name: result.data.name,
                  lastMsg: convInfo.lastContent.content,
                  unReadCnt: +convInfo.unCount.toString(),
                  time: new Date(+convInfo.lastContent.time.toString())
                }
                this.conversations.push(conversation);
              });
            }
          });
          
        }
        
      });
    })
  }
}
