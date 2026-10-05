import { inject } from '@angular/core';

import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

import { ChatMessageResponse, CreateChatMessageRequest } from '../models/chats.models';
import { PersonaResponse } from '../../personas/models/personas.models';
import { ChatService } from '../services/chat.services';

import { PersonaService } from '../../personas/services/persona.services';

interface ChatState {
  isPersonaLoaded: boolean
  areMessagesLoaded: boolean
  messages: ChatMessageResponse[]
  persona: PersonaResponse | null
  personaId: string
}

const initialState: ChatState = {
  isPersonaLoaded: false,
  areMessagesLoaded: false,
  messages: [],
  persona: null,
  personaId: ''
}

export const ChatStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withMethods(store => {
    const chatService: ChatService = inject(ChatService)
    const personaService: PersonaService = inject(PersonaService)
    return {
      loadChatForPersona(personaId: string){
        patchState(store, {personaId, isPersonaLoaded: false, areMessagesLoaded: false})
        // load persona
        this.loadPersona(personaId)
        // load messages
        this.loadMessages(personaId)
      },
      loadMessages(personaId: string){
        chatService.getMessagesForPersona(personaId).subscribe({
          next: result => {
            patchState(store, {areMessagesLoaded: true, messages: result})
          },
          error: err => {console.log(err)}
        })

      },
      loadPersona(personaId: string){
        personaService.getPersonaById(personaId).subscribe({
          next: result => {
            patchState(store, {persona: result, isPersonaLoaded: true})
          },
          error: err => {console.log(err)}
        })
      },
      sendMessage (payload: CreateChatMessageRequest) {
        chatService.sendMessage(payload).subscribe({
          next: result => {
            patchState(store, {messages: [...store.messages(), result[0], result[1]]})
          },
          error: err => {console.log(err)}
        })
      }
    }
  })
)
