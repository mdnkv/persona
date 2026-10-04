import { Component, inject, input, OnInit } from '@angular/core';
import { UpdatePersonaStore } from '../../stores/update-persona.stores';
import { UpdatePersonaForm } from '../../components/update-persona-form/update-persona-form';

@Component({
  imports: [UpdatePersonaForm],
  selector: 'app-update-persona-page',
  styleUrl: './update-persona-page.css',
  templateUrl: './update-persona-page.html',
})
export class UpdatePersonaPage implements OnInit {
  personaId = input.required<string>();

  protected readonly updatePersonaStore = inject(UpdatePersonaStore);

  ngOnInit() {
    this.updatePersonaStore.loadPersonaById(this.personaId());
  }
}
