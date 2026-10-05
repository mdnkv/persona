import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

import { ChatMessageResponse, CreateChatMessageRequest } from '../models/chats.models';
import { PersonaResponse } from '../../personas/models/personas.models';
import { MOCK_MESSAGES, MOCK_PERSONA } from '../mocks';

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
    return {
      loadChatForPersona(personaId: string){
        patchState(store, {personaId, isPersonaLoaded: false, areMessagesLoaded: false})
        // load persona
        this.loadPersona(personaId)
        // load messages
        this.loadMessages(personaId)
      },
      loadMessages(personaId: string){
        // todo
        patchState(store, {messages: MOCK_MESSAGES, areMessagesLoaded: true})
      },
      loadPersona(personaId: string){
        // todo
        patchState(store, {persona: MOCK_PERSONA, isPersonaLoaded: true})
      },
      sendMessage (payload: CreateChatMessageRequest) {
        // todo
        console.log(payload)
        const message: ChatMessageResponse = {
          id: '' + (store.messages().length + 1),
          content: payload.content,
          messageRole: 'USER',
          personaId: store.personaId()
        }
        console.log(message)
        // const updatedMessages = store.messages()
        // updatedMessages.push(message)
        patchState(store, {messages: [...store.messages(), message]})
      }
    }
  })
)
