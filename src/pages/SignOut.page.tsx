import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '~/hooks/useAuth'

const SignOutPage = () => {
  const navigate = useNavigate()
  const { signOut } = useAuth()

  useEffect(() => {
    const process = async () => {
      await signOut()
    }
    process().finally(() => {
      navigate('/', { replace: true })
    })
  }, [navigate, signOut])

  return null
}

export default SignOutPage
