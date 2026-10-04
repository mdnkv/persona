import { Component, effect, input, signal } from '@angular/core';
import {PersonaMetadataTagConfiguration, PersonaRelationshipType, PersonaResponse,} from '../../models/personas.models';
import { PersonasRelationshipTypes } from '../../models/personas.constants';
import { PersonaMetadataTagItem } from '../persona-metadata-tag-item/persona-metadata-tag-item';

@Component({
  imports: [PersonaMetadataTagItem],
  selector: 'app-persona-metadata-tags',
  styleUrl: './persona-metadata-tags.css',
  templateUrl: './persona-metadata-tags.html',
})
export class PersonaMetadataTags {

  persona = input.required<PersonaResponse>();
  tags: PersonaMetadataTagConfiguration[] = [];

  constructor() {
    effect(() => {
      if (this.persona() != null) {
        // convert persona data into tags
        // step 1. convert gender
        if (this.persona().gender == 'FEMALE') {
          this.tags.push({ displayedName: 'Female', icon: 'bx bx-female-sign' });
        } else if (this.persona().gender == 'MALE') {
          this.tags.push({ displayedName: 'Male', icon: 'bx bx-male-sign' });
        } else {
          this.tags.push({ displayedName: 'Non-binary', icon: 'bx bx-user' });
        }
        // step 2. convert relationship type
        const relationshipType: PersonaRelationshipType = PersonasRelationshipTypes.find(
          (e) => e.key == this.persona().relationshipType,
        )!;
        this.tags.push({ displayedName: relationshipType.displayedName, icon: 'bx bx-heart' });

        // step 3. convert activity status
        if (this.persona().active) {
          this.tags.push({ displayedName: 'Active' });
        } else {
          this.tags.push({ displayedName: 'Inactive' });
        }
      }
    })
  }
}
