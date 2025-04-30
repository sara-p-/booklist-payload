import { Book } from '@/payload-types'

export type BookSettingsType = {
  order: 'asc' | 'desc'
  search: string
  sort: SortType
  author: string
  series: string
  tags: string[]
}

export type SortType = 'series' | 'title' | 'rating' | 'published' | 'length'

export interface BookWithExtrasType extends Book {
  seriesTitle?: string
}
