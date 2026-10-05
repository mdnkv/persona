import { Component, inject } from '@angular/core';
import { ChatStore } from '../../stores/chat.stores';
import { PersonaMetadataTags } from '../../../personas/components/persona-metadata-tags/persona-metadata-tags';

@Component({
  imports: [PersonaMetadataTags],
  selector: 'app-chat-header',
  styleUrl: './chat-header.css',
  templateUrl: './chat-header.html',
})
export class ChatHeader {
  protected readonly chatStore = inject(ChatStore);
}
