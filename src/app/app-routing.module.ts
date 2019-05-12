import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ChatDetailComponent } from './chat/chat.detail.component';

const routes: Routes = [
  { 
    path: 'chat/:id',      
    component: ChatDetailComponent 
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
