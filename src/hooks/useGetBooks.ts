import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function useGetBooks() {
  const { data, error, isLoading } = useSWR('/api/book', fetcher)

  console.log({ data })

  return { data, error, isLoading }
}
