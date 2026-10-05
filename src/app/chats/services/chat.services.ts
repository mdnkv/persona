import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ChatMessageResponse, CreateChatMessageRequest } from '../models/chats.models';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  http: HttpClient = inject(HttpClient);
  serverUrl: string = environment.serverRoot;

  getMessagesForPersona(personaId: string): Observable<ChatMessageResponse[]>{
    return this.http.get<ChatMessageResponse[]>(`http://localhost:8001/chats/persona/${personaId}`)
  }

  sendMessage (body: CreateChatMessageRequest ): Observable<ChatMessageResponse[]> {
    return this.http.post<ChatMessageResponse[]>(`http://localhost:8001/chats/send`, body)
  }

}
