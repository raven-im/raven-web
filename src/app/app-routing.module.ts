import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/login/chat.component';
import { ChatDetailComponent } from './chat/detail/chat.detail.component';
import { ConversationComponent } from './chat/conversations/conversation.component';

const routes: Routes = [
  { 
    path: 'chat/:id',      
    component: ChatDetailComponent,
    data: {reuse: false}
  },
  { 
    path: 'chat/conversation/:id',      
    component: ConversationComponent,
    data: {reuse: false}
  },
  {
    path: 'chat',
    component: ChatComponent,
    data: { title: 'Chat' }
  },
  { 
    path: '',
    redirectTo: '/chat',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
