import './App.css'
import { User } from './dtos/User'
import useFetch from './hooks/useFetch'

function App() {
  const { loading, error, data } = useFetch<User[]>(
    'https://jsonplaceholder.typicode.com/users',
  )

  if (loading) return <div>Loading...</div>

  if (error) return <div>Error</div>

  return (
    <ul className="App">
      {data?.map((user: User) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default App
