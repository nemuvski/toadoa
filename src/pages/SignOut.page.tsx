import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import useAuth from '~/hooks/useAuth'

const SignOutPage = () => {
  const router = useHistory()
  const { signOut } = useAuth()

  useEffect(() => {
    const process = async () => {
      await signOut()
    }
    process().finally(() => {
      router.replace('/')
    })
  }, [router, signOut])

  return null
}

export default SignOutPage
