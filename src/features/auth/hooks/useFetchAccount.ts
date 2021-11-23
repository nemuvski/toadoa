import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '~/stores/Store'
import { selectUserUID } from '~/features/auth/stores/Auth.selector'
import { useEffect } from 'react'
import { selectAccount } from '~/features/auth/stores/Account.selector'
import { createAccountAction, getAccountAction } from '~/features/auth/stores/Account.action'
import { useNavigate } from 'react-router-dom'
import { AccountStatus } from '~/features/auth/models/Account'

const useFetchAccount = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const userUID = useSelector(selectUserUID)
  const { error } = useSelector(selectAccount)

  useEffect(() => {
    // 未ログインの場合は処理しない
    if (!userUID) return

    const process = async () => {
      const fetchedAccount = await dispatch(getAccountAction(userUID)).unwrap()
      // Accountがない場合は作成する
      if (!fetchedAccount) {
        await dispatch(createAccountAction(userUID)).unwrap()
      }
      // Accountがある場合にステータスがactiveでなければサインアウト処理に移る
      else if (AccountStatus.Active !== fetchedAccount.status) {
        navigate('/sign-out', { replace: true })
      }
    }

    process()
  }, [dispatch, navigate, userUID])

  useEffect(() => {
    if (error) {
      console.error(error)
    }
  }, [error])
}

export default useFetchAccount
