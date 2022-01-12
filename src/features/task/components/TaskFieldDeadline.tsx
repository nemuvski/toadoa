import React from 'react'
import { Dayjs } from 'dayjs'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { BiTimer } from 'react-icons/bi'
import { formatDateYMD, getDiffDay } from '~/utils/date'
import { IconWrapper } from '~/components/styled/IconWrapper'
import dayjs from '~/libs/dayjs'

const Root = styled.div(css`
  margin-bottom: 0.5rem;
  text-align: right;
`)

const Content = styled.div<{ date: Dayjs }>(
  css`
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem 0.4rem;
    width: 7.75rem;
    border-radius: var(--size-border-radius);
    font-size: 0.9rem;
  `,
  ({ date }) => {
    const currentDate = dayjs()
    const diff = getDiffDay(date, currentDate)

    let bgColor = '--color-info-main'
    let textColor = '--color-info-light'

    if (diff < 0) {
      bgColor = '--color-error-main'
      textColor = '--color-error-light'
    } else if (diff <= 3) {
      bgColor = '--color-warning-main'
      textColor = '--color-warning-light'
    }

    return css`
      background-color: var(${bgColor});
      color: var(${textColor});
    `
  }
)

type Props = {
  deadline: Dayjs | null
}

const TaskFieldDeadline: React.FC<Props> = ({ deadline }) => {
  if (!deadline) return null

  return (
    <Root>
      <Content date={deadline}>
        <IconWrapper size='medium'>
          <BiTimer />
        </IconWrapper>
        {formatDateYMD(deadline)}
      </Content>
    </Root>
  )
}

export default TaskFieldDeadline
