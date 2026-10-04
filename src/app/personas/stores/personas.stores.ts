import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { PersonaResponse } from '../models/personas.models';
import { PersonaService } from '../services/persona.services';
import { inject } from '@angular/core';

interface PersonasState {
  isLoading: boolean
  personas: PersonaResponse[]
}

const initialState: PersonasState = {
  isLoading: true,
  personas: []
}

export const PersonasStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withMethods(store => {
    const personaService: PersonaService = inject(PersonaService)
    return {
      loadPersonas(){
        console.log('Loading personas...')
        personaService.getPersonas().subscribe({
          next: result => {
            console.log(result)
            patchState(store, {isLoading: false, personas: result})
          },
          error: err => {
            console.log(err)
          }
        })
      }
    }
  })
)
