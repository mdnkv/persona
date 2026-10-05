export interface ChatMessageResponse {
  id: string
  personaId: string
  messageRole: string
  content: string
}

export interface CreateChatMessageRequest {
  personaId: string
  content: string
}
