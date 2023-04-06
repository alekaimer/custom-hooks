import useToggleBoolean from './hooks/useToggleBoolean'

function App() {
  const [theme, toggleTheme] = useToggleBoolean()

  return (
    <div>
      <button onClick={toggleTheme}>Toggle theme {theme ? '🌞' : '🌚'}</button>
    </div>
  )
}

export default App
