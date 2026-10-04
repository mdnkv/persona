import { Component, input, output } from '@angular/core';
import { PersonaResponse } from '../../models/personas.models';
import { PersonaMetadataTags } from '../persona-metadata-tags/persona-metadata-tags';
import { IconButton } from '../../../shared/components/icon-button/icon-button';

@Component({
  imports: [PersonaMetadataTags, IconButton],
  selector: 'app-persona-grid-item',
  styleUrl: './persona-grid-item.css',
  templateUrl: './persona-grid-item.html',
})
export class PersonaGridItem {
  persona = input.required<PersonaResponse>();
  onOpenPersonaSettings = output<string>();

  onSettingsClicked() {
    this.onOpenPersonaSettings.emit(this.persona().id)
  }

  onChatClicked() {}

}
