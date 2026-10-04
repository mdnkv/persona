import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { PersonaResponse, UpdatePersonaRequest } from '../models/personas.models';
import { PERSONAS } from '../../mock';

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
    const router: Router = inject(Router);
    return {
      loadPersonaById(id: string){
        // todo
        const persona = PERSONAS.find(e => e.id == id)
        if (persona != undefined){
          patchState(store, { isPersonaLoaded: true, currentPersona: persona });
        }
      },
      updatePersona(payload: UpdatePersonaRequest) {
        patchState(store, { isFormLoading: true });
        console.log(payload);
        // todo
        router.navigateByUrl('/personas');
      },
    };
  }),
);
