import { ElementType, useEffect } from 'react'
import { getIsLogged } from '../services/auth'
import { useRouter } from 'next/router'

export default function withAuth(WrappedComponent: ElementType) {
  const Wrapper = (props: unknown) => {
    const router = useRouter()

    useEffect(() => {
      const isLogged = getIsLogged()

      if (isLogged !== 'true') {
        router.replace('/')
      }
    }, [])

    return <WrappedComponent {...props} />
  }

  return Wrapper
}
