import { Book } from '@/payload-types'
import { useBookContext } from '@/contexts/bookProvider'
type SelectOption = {
  books: Book[]
  selectType: string
  selectName?: string
}

export default function useCreateDropdownOptions() {
  const { books } = useBookContext()

  function createOptions({ books, selectType, selectName }: SelectOption) {
    let options: string[] = []
    if (books !== undefined) {
      options = books
        .map((book) => {
          if (selectName) {
            if (typeof book[selectType as keyof Book] !== 'string') {
              return (book[selectType as keyof Book] as Record<string, string>)?.[
                selectName as keyof Book
              ]
            }
          } else {
            if (typeof book[selectType as keyof Book] !== 'string') {
              return book[selectType as keyof Book]
            }
          }
          return undefined
        })
        .filter((name): name is string => name !== undefined)
    }

    return ['all', ...options]
  }

  // Create dropdown options
  const authorOptions = createOptions({
    books,
    selectType: 'author',
    selectName: 'name',
  })
  const seriesOptions = createOptions({
    books,
    selectType: 'series',
    selectName: 'title',
  })

  return { authorOptions, seriesOptions }
}
