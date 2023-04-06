import useToggle from './hooks/useToggle'

function App() {
  const [theme, toggleTheme] = useToggle('light', 'dark')

  return (
    <div>
      <button onClick={toggleTheme}>
        Toggle theme {theme === 'light' ? '🌞' : '🌚'}
      </button>
    </div>
  )
}

export default App
