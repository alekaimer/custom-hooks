import { useCallback, useState } from 'react'

function useToggle<T = unknown>(
  value1: boolean | T = true,
  value2: boolean | T = false,
): [boolean | T, () => void] {
  const [state, setState] = useState<T | boolean>(value1)

  const toggle = useCallback((): void => {
    setState((previousState) => (previousState === value1 ? value2 : value1))
  }, [value1, value2])

  return [state, toggle]
}

export default useToggle

/* How to use

import useToggle from './hooks/useToggle'
function App() {
  const [theme, toggleTheme] = useToggle<string>('light', 'dark')
  return (
    <div>
      <button onClick={toggleTheme}>
        Toggle theme {theme === 'light' ? '🌞' : '🌚'}
      </button>
    </div>
  )
}
export default App
*/

/* Tem o mesmo funcionamento porém com definição de const como afunção

import { useCallback, useState } from 'react'
const useToggle = <T extends unknown>(
  initialState: boolean | T = false,
  secondaryState: boolean | T = true,
): [boolean | T, any] => {
  const [state, setState] = useState<boolean | T>(initialState)
  // Define and memorize toggler function in case we pass down the comopnent
  const toggle = useCallback(
    (): void =>
      setState((previousState) =>
        previousState === initialState ? secondaryState : initialState,
      ),
    [],
  )
  return [state, toggle]
}
export default useToggle

*/
