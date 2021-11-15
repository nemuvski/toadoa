import React from 'react'
import {
  IoCheckmarkCircleOutline,
  IoInformationCircleOutline,
  IoWarningOutline,
  IoAlertCircleOutline,
} from 'react-icons/io5'
import { MessageContent } from '~/models/Message'
import Maybe from '~/components/Maybe'
import Styles from '~/styles/message.style'

type Props = {
  content?: MessageContent
}

const Message: React.FC<Props> = ({ content }) => {
  if (!content) return null

  return (
    <div css={[Styles.root, Styles.rootVariant(content.level)]}>
      <div css={[Styles.icon, Styles.iconVariant(content.level)]}>
        <Maybe test={content.level === 'success'}>
          <IoCheckmarkCircleOutline />
        </Maybe>
        <Maybe test={content.level === 'info'}>
          <IoInformationCircleOutline />
        </Maybe>
        <Maybe test={content.level === 'warning'}>
          <IoWarningOutline />
        </Maybe>
        <Maybe test={content.level === 'error'}>
          <IoAlertCircleOutline />
        </Maybe>
      </div>
      <p css={[Styles.content, Styles.contentVariant(content.level)]}>{content.content}</p>
    </div>
  )
}

export default Message
