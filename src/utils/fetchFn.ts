async function fetchData<T = unknown>(url: string): Promise<T> {
  const response = await fetch(url)
  const data = (await response.json()) as T
  return data
}

export default fetchData
