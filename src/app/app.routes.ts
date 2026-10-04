import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'personas',
    loadChildren: () => import('./personas/routes/personas.routes')
      .then(result => result.PersonasRoutes)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/personas'
  }
];
