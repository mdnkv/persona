import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'personas',
    loadChildren: () =>
      import('./personas/routes/personas.routes').then((result) => result.PersonasRoutes),
  },
  {
    path: 'chats',
    loadChildren: () =>
      import('./chats/routes/chats.routes').then((result) => result.ChatsRoutes),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/personas',
  },
];
