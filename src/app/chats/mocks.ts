import { PersonaResponse } from '../personas/models/personas.models';
import { ChatMessageResponse } from './models/chats.models';

export const MOCK_PERSONA: PersonaResponse = {
  id: '1',
  name: 'Julia',
  gender: 'FEMALE',
  relationshipType: 'ROMANTIC',
  backstory: '',
  active: true
}

export const MOCK_MESSAGES: ChatMessageResponse[] = [
  {
    id: '1',
    content: 'Fusce viverra sem ultricies libero porttitor gravida. Quisque tincidunt lorem at urna porta iaculis. Donec vestibulum ultrices justo, viverra molestie odio gravida eu. Nunc purus nibh, sodales eget aliquam at, vehicula tempor nulla. Vestibulum venenatis mattis augue vel ultricies. Nunc vel vulputate neque. Nulla rhoncus quam mi, a fringilla tortor scelerisque at.',
    messageRole: 'PERSONA',
    personaId: '1',
  },
  {
    id: '2',
    content: 'Praesent non vestibulum lacus. Morbi orci mi, eleifend vitae porta ut, sollicitudin vitae nisi. Proin tellus sapien, pellentesque sed imperdiet non, sagittis ac quam',
    messageRole: 'USER',
    personaId: '1',
  },
  {
    id: '3',
    content: 'Duis aliquam quam ligula',
    messageRole: 'PERSONA',
    personaId: '1',
  },
];
