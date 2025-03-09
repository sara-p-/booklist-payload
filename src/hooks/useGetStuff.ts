import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function useGetStuff(endpoint: string) {
  const { data, error, isLoading } = useSWR(`/api/${endpoint}?limit=0`, fetcher)

  // console.log({ data })

  return { data, error, isLoading }
}
