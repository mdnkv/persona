import { Component, input } from '@angular/core';
import { PersonaMetadataTagConfiguration } from '../../models/personas.models';

@Component({
  imports: [],
  selector: 'app-persona-metadata-tag-item',
  styleUrl: './persona-metadata-tag-item.css',
  templateUrl: './persona-metadata-tag-item.html',
})
export class PersonaMetadataTagItem {
  configuration = input.required <PersonaMetadataTagConfiguration>()
}
