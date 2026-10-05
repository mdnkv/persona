import { Component, effect, inject, input } from '@angular/core';
import { ChatHeader } from '../../components/chat-header/chat-header';
import { MessagesList } from '../../components/messages-list/messages-list';
import { ChatFooter } from '../../components/chat-footer/chat-footer';
import { MessageForm } from '../../components/message-form/message-form';
import { ChatStore } from '../../stores/chat.stores';

@Component({
  imports: [ChatHeader, MessagesList, ChatFooter, MessageForm],
  selector: 'app-chat-page',
  styleUrl: './chat-page.css',
  templateUrl: './chat-page.html',
})
export class ChatPage {
  protected readonly chatStore = inject(ChatStore)
  personaId = input.required<string>()

  constructor() {
    effect(() => {
      // load chat with persona
      this.chatStore.loadChatForPersona(this.personaId())
    });
  }
}
