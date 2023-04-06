import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  return (
    <div>
      <p>Theme: {theme}</p>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
    </div>
  )
}

export default App
