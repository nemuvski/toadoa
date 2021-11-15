import { useCallback, useState } from 'react'
import { buildMessageContent, MessageContent, MessageLevel } from '~/features/message/models/Message'

const useMessage = () => {
  const [messageContent, setMessageContent] = useState<MessageContent | undefined>()
  const clearMessage = useCallback(() => {
    setMessageContent(undefined)
  }, [])
  const addMessage = useCallback((level: MessageLevel, content: string) => {
    setMessageContent(buildMessageContent(level, content))
  }, [])
  return {
    message: messageContent,
    clearMessage,
    addMessage,
  }
}

export default useMessage
