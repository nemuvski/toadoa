import React, { useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { AiOutlinePlus } from 'react-icons/ai'
import TaskForm from '~/features/task/components/TaskForm'
import Either from '~/components/Either'
import { ButtonIcon } from '~/components/styled/Button'
import { Card, CardBody } from '~/components/styled/Card'

const Root = styled.div(
  css`
    margin: 3rem 0;
  `
)

const CreateButton = styled.button(
  css`
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    margin: 0 auto;
    color: var(--color-white);
    background-color: var(--color-gray-dark);
    border-radius: 50%;
    line-height: 1;
  `
)
const CancelButton = styled.button(
  css`
    display: inline-block;
    padding: 0.1rem;
    color: var(--color-primary-main);

    &:hover {
      text-decoration: underline;
    }
  `
)

const TaskCreateForm = () => {
  const [formMode, setFormMode] = useState(false)

  return (
    <Root>
      <Either
        test={formMode}
        match={
          <Card>
            <CardBody>
              <CancelButton onClick={() => setFormMode(false)}>Cancel</CancelButton>
              <TaskForm actionAfterSubmit={() => setFormMode(false)} />
            </CardBody>
          </Card>
        }
        not={
          <CreateButton onClick={() => setFormMode(true)}>
            <ButtonIcon>
              <AiOutlinePlus />
            </ButtonIcon>
          </CreateButton>
        }
      />
    </Root>
  )
}

export default TaskCreateForm
