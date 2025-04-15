import { Author, Series } from '@/payload-types'
import useGetStuff from './useGetStuff'

export default function useCreateDropdownOptions() {
  // Get the authors and series from the database
  const { data: authorList } = useGetStuff('authors')
  const { data: seriesList } = useGetStuff('series')

  const authors =
    authorList !== undefined ? authorList?.docs?.map((author: Author) => author.name) : []
  const series =
    seriesList !== undefined ? seriesList?.docs?.map((series: Series) => series.title) : []

  return { authors, series }
}
