import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';
import { com } from 'assets/message';
import { Conversation } from '../model/conversation';
import { ContactService } from './contact.service';

@Injectable()
export class ConversationService {

  private conversations: Map<string, Conversation>;

  constructor(
    private contactService: ContactService,
    private socketClient: SocketService) { 
      this.conversations = new Map<string, Conversation>();

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
                  time: new Date(+convInfo.lastContent.time.toString()),
                  targetUser: uid
                }
                this.conversations.set(convInfo.converId, conversation);
              }
            });
          }
        });
      })
    }

  getConversationDetail(cid: string):  Conversation {
    return this.conversations.get(cid);
  } 
  
  getConversationList():  Array<Conversation> {
    let array = new Array<Conversation>();
    // filter long than 15 chars in conversation.
    this.conversations.forEach(conversation => {
      if (conversation.lastMsg.length > 15) {
        conversation.lastMsg = conversation.lastMsg.substr(0, 15) + "...";
      }
      array.push(conversation);
    });
    // sorting.
    let arraySort = array.sort((c1,c2) => {
        if (c1.time < c2.time) {
            return 1;
        }
    
        if (c1.time > c2.time) {
            return -1;
        }
    
        return 0;
    });
    return arraySort;
  } 
}
