import { useCallback, useEffect, useState } from 'react'
import fetchData from '../utils/fetchFn'

function useFetch<T = unknown>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const getData = useCallback(async () => {
    //useCallback to perform memoization and avoid infinite loop
    try {
      const data = await fetchData<T>(url)
      setData(data)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [url])

  useEffect(() => {
    getData()
  }, [getData]) //getData is a dependency of useEffect. exhaustive deps rule

  return { data, error, loading }
}

export default useFetch
