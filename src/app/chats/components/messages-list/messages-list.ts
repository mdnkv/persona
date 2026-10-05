import { Component, inject } from '@angular/core';
import { ChatStore } from '../../stores/chat.stores';
import { PersonaMessageItem } from '../persona-message-item/persona-message-item';
import { UserMessageItem } from '../user-message-item/user-message-item';

@Component({
  imports: [PersonaMessageItem, UserMessageItem],
  selector: 'app-messages-list',
  styleUrl: './messages-list.css',
  templateUrl: './messages-list.html',
})
export class MessagesList {
  protected readonly chatStore = inject(ChatStore);
}
