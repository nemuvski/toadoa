import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  IoCheckmarkCircleOutline,
  IoInformationCircleOutline,
  IoWarningOutline,
  IoAlertCircleOutline,
} from 'react-icons/io5'
import { MessageContent, MessageLevel } from '~/features/message/models/message'
import Maybe from '~/components/Maybe'

const Root = styled.div<{ level: MessageLevel }>(
  css`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0.6rem 0.8rem;
    border-radius: var(--size-border-radius);
    line-height: 1.5;
  `,
  ({ level }) => css`
    background-color: ${`var(--color-${level}-light)`};
  `
)

const IconWrapper = styled.div<{ level: MessageLevel }>(
  css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 1.4rem;
    height: 1.4rem;
    margin-right: 0.75rem;

    > svg {
      width: 100%;
      height: auto;
      vertical-align: middle;
    }
  `,
  ({ level }) => css`
    color: ${`var(--color-${level}-main)`};
  `
)

const Content = styled.p<{ level: MessageLevel }>(
  css`
    flex: 1 1 auto;
    word-break: break-all;
    font-size: 0.9rem;
  `,
  ({ level }) => css`
    color: ${`var(--color-${level}-dark)`};
  `
)

type Props = {
  content?: MessageContent
}

const Message: React.FC<Props> = ({ content }) => {
  if (!content) return null

  return (
    <Root level={content.level} role='alert'>
      <IconWrapper level={content.level}>
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
      </IconWrapper>
      <Content level={content.level}>{content.content}</Content>
    </Root>
  )
}

export default Message
