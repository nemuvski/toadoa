import React from 'react'
import { Task, TaskStatus } from '~/features/task/models/task'
import { useTaskForm } from '~/features/task/hooks/form'
import { Button } from '~/components/styled/Button'
import {
  Form,
  FormActions,
  FormField,
  FormFieldHelp,
  FormDateInput,
  FormSelect,
  FormTextInput,
} from '~/components/styled/Form'
import { TASK_FIELD_CONTENT_MAX_LENGTH } from '~/features/task/constants'

type Props = {
  task?: Task
  actionAfterSubmit?: () => void
}

const TaskForm: React.FC<Props> = ({ task, actionAfterSubmit }) => {
  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { isSubmitting, isValid, isDirty },
  } = useTaskForm(task)

  return (
    <Form>
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
        <Button onClick={() => reset()}>Reset</Button>
        <Button
          disabled={isSubmitting || !isValid || !isDirty}
          onClick={handleSubmit((formFields) => {
            // TODO: 登録処理
            console.debug(formFields)
            actionAfterSubmit && actionAfterSubmit()
          })}
          color='primary'
        >
          Save
        </Button>
      </FormActions>
    </Form>
  )
}

export default TaskForm
