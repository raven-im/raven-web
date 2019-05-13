import { Component, OnInit } from '@angular/core';
import { UsersOutParam } from './chat/shared/model/usersOutParam';
import { Conversation } from './chat/shared/model/conversation';
import { ContactService } from './chat/shared/services/contact.service';
import { ConversationService } from './chat/shared/services/conversation.service';
import { Route } from '@angular/router';
import { containsTree } from '@angular/router/src/url_tree';

@Component({
  selector: 'tcc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contacts: UsersOutParam[] = [];
  conversations: Conversation[] = [];
  constructor(
    private router: Route,
    private convClient: ConversationService,
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

  contactItemClick(): void {
    // routerLink="/chat/{{contact.id}}" 
    console.log('userId');
  }
}
