import { PersonaRelationshipType } from './personas.models';
import { TagInputItemConfiguration } from '../../shared/models/shared.models';

export const PersonasRelationshipTypes: PersonaRelationshipType[] = [
  {
    displayedName: 'Friendship',
    key: 'FRIENDSHIP'
  },
  {
    displayedName: 'Romantic',
    key: 'ROMANTIC'
  }
]

export const RelationshipsInputOptions: TagInputItemConfiguration[] = [
  {
    displayedName: 'Friendship',
    objectKey: 'FRIENDSHIP',
  },
  {
    displayedName: 'Romantic',
    objectKey: 'ROMANTIC',
  },
];

export const GenderInputOptions: TagInputItemConfiguration[] = [
  {
    displayedName: 'Female',
    objectKey: 'FEMALE',
    icon: 'bx bx-female-sign',
  },
  {
    displayedName: 'Male',
    objectKey: 'MALE',
    icon: 'bx bx-male-sign',
  },
  {
    displayedName: 'Non binary',
    objectKey: 'NON_BINARY',
    icon: 'bx bx-user',
  }
];
