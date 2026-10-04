import { PersonaResponse } from './personas/models/personas.models';

export const PERSONAS: PersonaResponse[] = [
  {
    id: '1',
    name: 'Mariana',
    relationshipType: 'ROMANTIC',
    gender: 'FEMALE',
    active: true,
    backstory: '',
  },
  {
    id: '2',
    name: 'Daria',
    relationshipType: 'FRIEND',
    gender: 'FEMALE',
    active: true,
    backstory: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];
