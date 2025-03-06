export type BookSettingsType = {
  order: 'asc' | 'desc'
  sort: SortType
  author: string
  series: string
  tags: string[]
}

export type SortType = 'series' | 'title' | 'rating' | 'published' | 'length'
