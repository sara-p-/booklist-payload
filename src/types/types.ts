export type BookSettingsType = {
  order: 'asc' | 'desc'
  search: string
  sort: SortType
  author: string
  series: string
  tags: string[]
}

export type SortType = 'series' | 'title' | 'rating' | 'published' | 'length'
