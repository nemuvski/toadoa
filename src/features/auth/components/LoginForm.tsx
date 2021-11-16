import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { BiPaperPlane } from 'react-icons/bi'
import useAuth from '~/features/auth/hooks/useAuth'
import useMessage from '~/features/message/hooks/useMessage'
import { selectAuth } from '~/features/auth/stores/auth/selector'
import Message from '~/features/message/components/Message'
import LoadingIcon from '~/components/icons/LoadingIcon'
import Either from '~/components/Either'
import { Form, FormActions, FormTextInput } from '~/styles/styled/form.component'
import { Button, ButtonIcon } from '~/styles/styled/button.component'

type FormFields = {
  email: string
}

const LoginForm = () => {
  const { signIn } = useAuth()
  const { message, addMessage, clearMessage } = useMessage()
  const { error } = useSelector(selectAuth)
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
      await signIn(formFields.email)
      addMessage('success', `Your magic link has been sent to ${formFields.email}`)
    },
    [signIn, addMessage]
  )

  useEffect(() => {
    if (error) {
      addMessage('error', error.message)
    } else {
      clearMessage()
    }
  }, [addMessage, clearMessage, error])

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
