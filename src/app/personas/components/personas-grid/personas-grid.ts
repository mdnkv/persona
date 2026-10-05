import { Component, inject } from '@angular/core';
import { PersonasStore } from '../../stores/personas.stores';
import { PersonaGridItem } from '../persona-grid-item/persona-grid-item';
import { Router } from '@angular/router';

@Component({
  imports: [PersonaGridItem],
  selector: 'app-personas-grid',
  styleUrl: './personas-grid.css',
  templateUrl: './personas-grid.html',
})
export class PersonasGrid {
  router: Router = inject(Router);
  protected readonly personasStore = inject(PersonasStore);

  onOpenPersonaSettings(personaId: string) {
    this.router.navigate(['/personas/update', personaId]);
  }

  onOpenChat(personaId: string) {
    this.router.navigate(['/chats/persona', personaId]);
  }
}
