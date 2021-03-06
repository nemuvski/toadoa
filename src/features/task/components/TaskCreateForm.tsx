import React, { useRef, useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { AiOutlinePlus } from 'react-icons/ai'
import useEscKeydown from '~/hooks/useEscKeydown'
import TaskForm from '~/features/task/components/TaskForm'
import Either from '~/components/Either'
import { ButtonIcon } from '~/components/styled/Button'
import { Card, CardBody, CardHeaderAction, CardHeaderActionButton } from '~/components/styled/Card'

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

const TaskCreateForm = () => {
  const [formMode, setFormMode] = useState(false)
  const elementRef = useRef(null)
  useEscKeydown(elementRef, () => setFormMode(false))

  return (
    <Root>
      <Either
        test={formMode}
        match={
          <Card ref={elementRef}>
            <CardBody>
              <CardHeaderAction>
                <CardHeaderActionButton onClick={() => setFormMode(false)}>
                  Cancel [<kbd>ESC</kbd>]
                </CardHeaderActionButton>
              </CardHeaderAction>
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
