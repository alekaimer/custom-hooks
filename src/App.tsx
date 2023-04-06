import AppToggle from './howToUseUseToggle'
import AppToggleBoolean from './howToUseUseToggleBoolean'
import AppFetch from './howToUseUseFetch'
import AppLocalStorage from './howToUseUseLocalStorage'
import AppAsync from './howToUseUseAsync'

const render = [
  { id: 'toggle', App: <AppToggle /> },
  { id: 'toggleBoolean', App: <AppToggleBoolean /> },
  { id: 'fetch', App: <AppFetch /> },
  { id: 'localStorage', App: <AppLocalStorage /> },
  { id: 'async', App: <AppAsync /> },
]

function App() {
  return (
    <div>
      <section>
        <AppToggle />
      </section>
      <section>
        <AppToggleBoolean />
      </section>
      <section>
        <AppFetch />
      </section>
      <section>
        <AppLocalStorage />
      </section>
      <section>
        <AppAsync />
      </section>
    </div>
  )
}

export default App
