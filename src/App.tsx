import { useEffect, useState } from 'react'
import './App.css'

type User = {
  id: string
  name: string
}

async function fetchData(): Promise<User[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = (await response.json()) as User[]
  return data
}

function App() {
  const [data, setData] = useState<User[]>([])
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  async function getData() {
    try {
      const data = await fetchData()
      setData(data)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  if (loading) return <div>Loading...</div>

  if (error) return <div>Error</div>

  return (
    <ul className="App">
      {data.map((user: User) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default App
