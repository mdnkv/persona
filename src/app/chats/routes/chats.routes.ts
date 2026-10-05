import { Routes } from '@angular/router';
import { ChatPage } from '../pages/chat-page/chat-page';

export const ChatsRoutes: Routes = [
  {
    path: 'persona/:personaId',
    component: ChatPage
  }
]
