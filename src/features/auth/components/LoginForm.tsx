import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { BiPaperPlane } from 'react-icons/bi'
import { useSignIn } from '~/features/auth/hooks/auth'
import useMessage from '~/features/message/hooks/useMessage'
import Message from '~/features/message/components/Message'
import LoadingIcon from '~/components/icons/LoadingIcon'
import Either from '~/components/Either'
import { Form, FormActions, FormTextInput } from '~/components/styled/Form'
import { Button, ButtonIcon } from '~/components/styled/Button'

type FormFields = {
  email: string
}

const LoginForm = () => {
  const signInMutation = useSignIn()
  const { message, addMessage } = useMessage()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm<FormFields>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
    },
  })

  const handleButtonClick = useCallback(
    async (formFields: FormFields) => {
      await signInMutation.mutateAsync(formFields.email)
      addMessage('success', `Your magic link has been sent to ${formFields.email}`)
    },
    [signInMutation, addMessage]
  )

  return (
    <Form>
      <Message content={message} />

      <FormTextInput
        type='email'
        tabIndex={0}
        placeholder='Your e-mail address'
        disabled={isSubmitting}
        {...register('email', {
          required: true,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
      />
      <FormActions>
        <Button
          disabled={isSubmitting || !isValid}
          onClick={handleSubmit(handleButtonClick)}
          color='primary'
          tabIndex={1}
        >
          <ButtonIcon>
            <Either test={isSubmitting} match={<LoadingIcon />} not={<BiPaperPlane />} />
          </ButtonIcon>
          Send Magic Link
        </Button>
      </FormActions>
    </Form>
  )
}

export default LoginForm
