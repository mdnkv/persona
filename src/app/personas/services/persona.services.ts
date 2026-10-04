import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import {CreatePersonaRequest, PersonaResponse, UpdatePersonaRequest,} from '../models/personas.models';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  http: HttpClient = inject(HttpClient);
  serverUrl: string = environment.serverRoot;

  getPersonas(): Observable<PersonaResponse[]> {
    return this.http.get<PersonaResponse[]>(`${this.serverUrl}/personas`);
  }

  getPersonaById(personaId: string): Observable<PersonaResponse> {
    return this.http.get<PersonaResponse>(`${this.serverUrl}/personas/${personaId}`);
  }

  createPersona(body: CreatePersonaRequest): Observable<PersonaResponse> {
    return this.http.post<PersonaResponse>(`${this.serverUrl}/personas`, body);
  }

  updatePersona(body: UpdatePersonaRequest): Observable<PersonaResponse> {
    return this.http.put<PersonaResponse>(`${this.serverUrl}/personas`, body);
  }

}
