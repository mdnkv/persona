import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { CreatePersonaRequest } from '../models/personas.models';
import { PersonaService } from '../services/persona.services';

interface CreatePersonaState {
  isFormLoading: boolean;
}

const initialState: CreatePersonaState = {
  isFormLoading: false,
};

export const CreatePersonaStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => {
    const router: Router = inject(Router)
    const personaService: PersonaService = inject(PersonaService)
    return {
      createPersona(payload: CreatePersonaRequest) {
        patchState(store, { isFormLoading: true });
        personaService.createPersona(payload).subscribe({
          next: result => {
            patchState(store, {isFormLoading: false})
            router.navigateByUrl('/personas')
          },
          error: err => {
            console.log(err)
          }
        })
      },
    };
  }),
);
