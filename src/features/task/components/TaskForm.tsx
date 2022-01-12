import React, { useCallback } from 'react'
import { TASK_FIELD_CONTENT_MAX_LENGTH } from '~/features/task/constants'
import { Task, TaskStatus } from '~/features/task/models/task'
import { useTaskForm } from '~/features/task/hooks/form'
import { useInsertTask, useUpdateTask } from '~/features/task/hooks/task'
import useMessage from '~/features/message/hooks/useMessage'
import Maybe from '~/components/Maybe'
import Message from '~/features/message/components/Message'
import LoadingIcon from '~/components/icons/LoadingIcon'
import { Button, ButtonIcon } from '~/components/styled/Button'
import {
  Form,
  FormActions,
  FormField,
  FormFieldHelp,
  FormDateInput,
  FormSelect,
  FormTextInput,
} from '~/components/styled/Form'

type Props = {
  task?: Task
  actionAfterSubmit?: () => void
}

const TaskForm: React.FC<Props> = ({ task, actionAfterSubmit }) => {
  const insertTaskMutation = useInsertTask()
  const updateTaskMutation = useUpdateTask(task?.status)
  const { message, addMessage, clearMessage } = useMessage()
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { isSubmitting, isValid, isDirty },
  } = useTaskForm(task)

  const handleSuccessOnSaveTask = useCallback(() => {
    actionAfterSubmit && actionAfterSubmit()
  }, [actionAfterSubmit])
  const handleErrorOnSaveTask = useCallback(
    (error) => {
      if (error instanceof Error) {
        console.error(error)
        addMessage('error', error.message)
      }
    },
    [addMessage]
  )

  return (
    <Form>
      <Message content={message} />

      <FormField>
        <FormTextInput
          autoFocus
          maxLength={TASK_FIELD_CONTENT_MAX_LENGTH}
          {...register('content', { required: true, maxLength: TASK_FIELD_CONTENT_MAX_LENGTH })}
        />
        <FormFieldHelp>
          {watch('content').length} / {TASK_FIELD_CONTENT_MAX_LENGTH}
        </FormFieldHelp>
      </FormField>

      <FormField withLabel>
        <label>Deadline</label>
        <FormDateInput {...register('deadline')} />
      </FormField>

      <FormField withLabel>
        <label>Status</label>
        <FormSelect {...register('status')}>
          <option value={TaskStatus.Ready}>Ready</option>
          <option value={TaskStatus.InProgress}>In progress</option>
          <option value={TaskStatus.Done}>Done</option>
        </FormSelect>
      </FormField>

      <FormActions>
        <Button
          onClick={() => {
            clearMessage()
            reset()
          }}
        >
          Reset
        </Button>
        <Button
          disabled={isSubmitting || !isValid || !isDirty}
          onClick={handleSubmit(async (formFields) => {
            const { content, status, deadline } = formFields

            if (task) {
              await updateTaskMutation.mutateAsync(
                {
                  preTask: task,
                  formTask: {
                    content,
                    status,
                    deadline,
                  },
                },
                {
                  onSuccess: () => handleSuccessOnSaveTask(),
                  onError: (error) => handleErrorOnSaveTask(error),
                }
              )
            } else {
              await insertTaskMutation.mutateAsync(
                {
                  content,
                  status,
                  deadline,
                },
                {
                  onSuccess: () => handleSuccessOnSaveTask(),
                  onError: (error) => handleErrorOnSaveTask(error),
                }
              )
            }
          })}
          color='primary'
        >
          <Maybe test={isSubmitting}>
            <ButtonIcon>
              <LoadingIcon />
            </ButtonIcon>
          </Maybe>
          Save
        </Button>
      </FormActions>
    </Form>
  )
}

export default TaskForm
