import { useCallback, useState } from 'react'

const useToggleBoolean = (initialState: boolean = false): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState)

  // Define and memorize toggler function in case we pass down the comopnent
  const toggle = useCallback((): void => setState((state) => !state), [])
  return [state, toggle]
}

export default useToggleBoolean
