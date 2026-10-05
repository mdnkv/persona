import { Component, input } from '@angular/core';
import { ChatMessageResponse } from '../../models/chats.models';

@Component({
  imports: [],
  selector: 'app-persona-message-item',
  styleUrl: './persona-message-item.css',
  templateUrl: './persona-message-item.html',
})
export class PersonaMessageItem {
  chatMessage = input.required<ChatMessageResponse>();
}
