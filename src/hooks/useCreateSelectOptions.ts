import { Book } from '@/payload-types'
import React from 'react'

type SelectOption = {
  books: Book[]
  selectType: string
  selectName?: string
}

export default function useCreateSelectOptions(
  books: Book[],
  selectType: string,
  selectName?: string,
) {
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

  return options
}
