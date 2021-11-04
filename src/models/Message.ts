export type MessageLevel = 'success' | 'info' | 'warning' | 'error'

export interface MessageContent {
  level: MessageLevel
  content: string
}

export const buildMessageContent = (level: MessageLevel, content: string) => ({
  level,
  content,
})
