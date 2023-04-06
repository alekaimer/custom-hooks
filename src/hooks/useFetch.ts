import { useCallback, useEffect, useState } from 'react'
import fetchData from '../utils/fetchData'

// TODO: inserir 'options' como atributo opcional para useFetch(url, options = {})
function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const getData = useCallback(async () => {
    setIsLoading(true)
    //useCallback to perform memoization and avoid infinite loop
    try {
      const data = await fetchData<T>(url)
      setData(data)
    } catch (error) {
      setError(true)
    } finally {
      setIsLoading(false)
    }
  }, [url])

  useEffect(() => {
    getData()
  }, [getData]) //getData is a dependency of useEffect. exhaustive deps rule

  return { data, error, isLoading }
}

export default useFetch

/* how to use

import useFetch from './hooks/useFetch'

export type User = {
  id: string
  name: string
}

function App() {
  const { isLoading, error, data } = useFetch<User[]>(
    'https://jsonplaceholder.typicode.com/users',
  )

  if (isLoading) return <div>Loading...</div>

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

*/
