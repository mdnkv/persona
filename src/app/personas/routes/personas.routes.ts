import { Routes } from '@angular/router';
import { PersonasPage } from '../pages/personas-page/personas-page';
import { CreatePersonaPage } from '../pages/create-persona-page/create-persona-page';
import { UpdatePersonaPage } from '../pages/update-persona-page/update-persona-page';

export const PersonasRoutes: Routes = [
  {
    path: 'create',
    component: CreatePersonaPage
  },
  {
    path: 'update/:personaId',
    component: UpdatePersonaPage
  },
  {
    path: '',
    component: PersonasPage
  }
]
