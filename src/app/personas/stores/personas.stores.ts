import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { PersonaResponse } from '../models/personas.models';
import { PERSONAS } from '../../mock';

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
    return {
      loadPersonas(){
        console.log('Loading personas...')
        patchState(store, {isLoading: false, personas: PERSONAS})
      }
    }
  })
)
