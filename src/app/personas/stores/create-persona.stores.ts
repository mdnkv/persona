import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { CreatePersonaRequest } from '../models/personas.models';

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
    const router: Router = inject(Router);
    return {
      createPersona(payload: CreatePersonaRequest) {
        patchState(store, { isFormLoading: true });
        console.log(payload);
        // todo
        router.navigateByUrl('/personas');
      },
    };
  }),
);
