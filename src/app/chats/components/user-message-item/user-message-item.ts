import { Component, input } from '@angular/core';
import { ChatMessageResponse } from '../../models/chats.models';

@Component({
  imports: [],
  selector: 'app-user-message-item',
  styleUrl: './user-message-item.css',
  templateUrl: './user-message-item.html',
})
export class UserMessageItem {

  chatMessage = input.required<ChatMessageResponse>()
}
