export interface PersonaResponse {
  id: string;
  name: string;
  gender: string;
  relationshipType: string;
  backstory: string;
  active: boolean;
}

export interface CreatePersonaRequest {
  name: string
  gender: string
}

export interface UpdatePersonaRequest {
  id: string
  name: string
  gender: string
  relationshipType: string
  backstory: string
  active: boolean
}

export interface PersonaMetadataTagConfiguration {
  displayedName: string
  icon?: string
}

export interface PersonaRelationshipType {
  displayedName: string
  key: string
}
