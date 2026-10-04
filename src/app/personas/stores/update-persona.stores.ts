import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { PersonaResponse, UpdatePersonaRequest } from '../models/personas.models';
import { PersonaService } from '../services/persona.services';

interface UpdatePersonaState {
  isFormLoading: boolean
  isPersonaLoaded: boolean
  currentPersona: PersonaResponse | null
}

const initialState: UpdatePersonaState = {
  isFormLoading: false,
  isPersonaLoaded: false,
  currentPersona: null
};

export const UpdatePersonaStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    const router: Router = inject(Router)
    const personaService: PersonaService = inject(PersonaService)

    return {
      loadPersonaById(id: string){
        personaService.getPersonaById(id).subscribe({
          next: result => {
            patchState(store, {isPersonaLoaded: true, currentPersona: result, isFormLoading: false})
          },
          error: (err) => {
            console.log(err)
          }
        })
      },
      updatePersona(payload: UpdatePersonaRequest) {
        patchState(store, { isFormLoading: true });
        console.log(payload);
        personaService.updatePersona(payload).subscribe({
          next: result => {
            router.navigateByUrl('/personas')
          },
          error: (err) => {
            console.log(err)
          }
        })
      },
    };
  }),
);
