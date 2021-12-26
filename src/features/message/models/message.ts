export type MessageLevel = 'success' | 'info' | 'warning' | 'error'

export interface MessageContent {
  level: MessageLevel
  content: string
}

export function buildMessageContent(level: MessageLevel, content: string) {
  return {
    level,
    content,
  }
}
