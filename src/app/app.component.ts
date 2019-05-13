import { Component, OnInit } from '@angular/core';
import { SocketService } from './chat/shared/services/socket.service';
import { UsersOutParam } from './chat/shared/model/usersOutParam';
import { com } from 'assets/message';
import { Conversation } from './chat/shared/model/conversation';
import { ContactService } from './chat/shared/services/contact.service';
import { ConversationService } from './chat/shared/services/conversation.service';

@Component({
  selector: 'tcc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contacts: UsersOutParam[] = [];
  conversations: Conversation[] = [];
  constructor(
    private convClient: ConversationService,
    private socketClient: SocketService,
    private contactService: ContactService) { }

  ngOnInit(): void {
    this.initModel();   
  }

  private initModel(): void {
    this.getContacts();
    this.getConversations();
  }
  
  getContacts(): void {
    //get Contacts list.
    this.contacts = this.contactService.getUserList();
  }

  getConversations(): void {
    this.conversations = this.convClient.getConversationList();
  }
}
