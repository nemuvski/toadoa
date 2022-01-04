import { useForm } from 'react-hook-form'

type LoginFormFields = {
  email: string
}

export function useLoginForm() {
  return useForm<LoginFormFields>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
    },
  })
}
