import { css } from '@emotion/react'
import { MessageLevel } from '~/features/message/models/Message'

const root = css`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.6rem 0.8rem;
  border-radius: var(--size-border-radius);
  line-height: 1.5;
`

const rootVariant = (level: MessageLevel) => css`
  background-color: ${`var(--color-${level}-light)`};
`

const icon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 1.4rem;
  height: 1.4rem;
  margin-right: 0.75rem;
`

const iconVariant = (level: MessageLevel) => css`
  color: ${`var(--color-${level}-main)`};
`

const content = css`
  flex: 1 1 auto;
  word-break: break-all;
  font-size: 0.9rem;
`

const contentVariant = (level: MessageLevel) => css`
  color: ${`var(--color-${level}-dark)`};
`

const styles = {
  root,
  rootVariant,
  icon,
  iconVariant,
  content,
  contentVariant,
}

export default styles
