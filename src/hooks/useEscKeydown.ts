import { MutableRefObject, useCallback, useEffect } from 'react'
import { KEY_CODE_ESC } from '~/constants'

export default function useEscKeydown(elementRef: MutableRefObject<HTMLElement | null>, callback: () => void) {
  const escAction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === KEY_CODE_ESC && callback) {
        callback()
      }
    },
    [callback]
  )

  useEffect(() => {
    const targetElement = elementRef.current

    if (targetElement) {
      targetElement.addEventListener('keydown', escAction)
    }

    return () => {
      if (targetElement) {
        targetElement.removeEventListener('keydown', escAction)
      }
    }
  }, [escAction, elementRef])
}
