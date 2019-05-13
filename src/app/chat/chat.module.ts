import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material/material.module';

import { ChatComponent } from './login/chat.component';
import { SocketService } from './shared/services/socket.service';
import { DialogUserComponent } from './dialog-user/dialog-user.component';
import { RestService } from './shared/services/rest.service';
import { ChatDetailComponent } from './detail/chat.detail.component';
import { ConversationComponent } from './conversations/conversation.component';
import { ContactService } from './shared/services/contact.service';
import { ConversationService } from './shared/services/conversation.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [ChatComponent, DialogUserComponent, ChatDetailComponent, ConversationComponent],
  providers: [SocketService, RestService, ContactService, ConversationService],
  entryComponents: [DialogUserComponent]
})
export class ChatModule { }
