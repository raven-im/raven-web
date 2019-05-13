import { Component, OnInit } from '@angular/core';
import { UsersOutParam } from './chat/shared/model/usersOutParam';
import { Conversation } from './chat/shared/model/conversation';
import { ContactService } from './chat/shared/services/contact.service';
import { ConversationService } from './chat/shared/services/conversation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tcc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contacts: UsersOutParam[] = [];
  conversations: Conversation[] = [];
  constructor(
    private router: Router,
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

  contactItemClick(contactId: string): void {
    let convId = null;
    this.conversations.forEach(conversation => {
      if (contactId === conversation.targetUser) {
        convId = conversation.convId;
        return;
      }
    });
    if (convId != null) {
      this.router.navigateByUrl('/chat/conversation/' + convId);
    } else {
      this.router.navigateByUrl('/chat/' + contactId);
    }
  }
}
