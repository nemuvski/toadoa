import React from 'react'
import {
  IoCheckmarkCircleOutline,
  IoInformationCircleOutline,
  IoWarningOutline,
  IoAlertCircleOutline,
} from 'react-icons/io5'
import { MessageContent } from '~/models/Message'
import Styles from '~/styles/message.style'

type Props = {
  content: MessageContent
}

const Message: React.FC<Props> = ({ content: { level, content } }) => (
  <div css={[Styles.root, Styles.rootVariant(level)]}>
    <div css={[Styles.icon, Styles.iconVariant(level)]}>
      {level === 'success' && <IoCheckmarkCircleOutline />}
      {level === 'info' && <IoInformationCircleOutline />}
      {level === 'warning' && <IoWarningOutline />}
      {level === 'error' && <IoAlertCircleOutline />}
    </div>
    <p css={[Styles.content, Styles.contentVariant(level)]}>{content}</p>
  </div>
)

export default Message
