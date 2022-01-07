import { useNavigate } from 'react-router-dom'
import { useLayoutEffect, useRef, useState } from 'react'
import { useMutation } from 'react-query'
import { AccountStatus } from '~/features/auth/models/account'
import { createAccount, getAccount } from '~/features/auth/infrastructure/account'
import { useAuthUser } from '~/features/auth/hooks/auth'

function useFetchAccount() {
  return useMutation('account/fetch', (userUID: Alias.UserUID) => getAccount(userUID))
}

function useCreateAccount() {
  return useMutation('account/create', (userUID: Alias.UserUID) => createAccount(userUID))
}

export function useCheckAccount() {
  const done = useRef(false)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const authUser = useAuthUser()
  const fetchAccountMutation = useFetchAccount()
  const createAccountMutation = useCreateAccount()

  useLayoutEffect(() => {
    if (done.current) {
      return
    }

    async function process() {
      const account = await fetchAccountMutation.mutateAsync(authUser.id)
      console.debug('[Fetch] Account', account)

      // Accountデータがある時に、ステータスがactiveでない場合はサインアウト処理に移る
      if (account && account.status !== AccountStatus.Active) {
        navigate('/sign-out', { replace: true })
      }

      // Accountデータがない場合は作成する
      if (!account) {
        const createdAccount = await createAccountMutation.mutateAsync(authUser.id)
        console.debug('[Create] Account', createdAccount)
      }
    }

    done.current = true
    process().finally(() => {
      setIsLoading(false)
      console.debug('[Done] CheckAccount')
    })
  }, [navigate, authUser, fetchAccountMutation, createAccountMutation])

  return isLoading
}
