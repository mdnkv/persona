import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChatStore } from '../../stores/chat.stores';
import { CreateChatMessageRequest } from '../../models/chats.models';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-message-form',
  styleUrl: './message-form.css',
  templateUrl: './message-form.html',
})
export class MessageForm {
  protected readonly chatStore = inject(ChatStore)

  formBuilder: FormBuilder = inject(FormBuilder)
  form: FormGroup = this.formBuilder.group({
    content: ['', [Validators.required]]
  })

  formSubmit() {
    const message: CreateChatMessageRequest = {
      content: this.form.get('content')?.value,
      personaId: this.chatStore.personaId()
    }
    this.chatStore.sendMessage(message)
    this.form.reset()
  }
}
