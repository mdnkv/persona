import { Component } from '@angular/core';
import { CreatePersonaForm } from '../../components/create-persona-form/create-persona-form';

@Component({
  imports: [CreatePersonaForm],
  selector: 'app-create-persona-page',
  styleUrl: './create-persona-page.css',
  templateUrl: './create-persona-page.html',
})
export class CreatePersonaPage {}
