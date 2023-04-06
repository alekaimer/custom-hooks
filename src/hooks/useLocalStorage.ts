import { useCallback, useState } from 'react'

function useLocalStorage(
  key: string,
  initialValue = '',
): [string, (value: string) => void] {
  const [state, setState] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key)

      return storedValue ? JSON.parse(storedValue) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = useCallback(
    (value: string) => {
      try {
        setState(value)
        localStorage.setItem(key, JSON.stringify(value))
      } catch (error) {
        console.log(error)
      }
    },
    [key],
  )

  return [state, setValue]
}

export default useLocalStorage

/* how to use

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  return (
    <div>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
    </div>
  )
}
*/
