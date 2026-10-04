import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PersonasGrid } from '../../components/personas-grid/personas-grid';
import { PersonasStore } from '../../stores/personas.stores';

@Component({
  imports: [PersonasGrid, RouterLink],
  selector: 'app-personas-page',
  styleUrl: './personas-page.css',
  templateUrl: './personas-page.html',
})
export class PersonasPage implements OnInit {

  protected readonly personasStore = inject(PersonasStore)

  ngOnInit() {
    this.personasStore.loadPersonas()
  }

}
