'use client'
import React from 'react'

type BookSettings = {
  order: 'asc' | 'desc'
  sort: 'series' | 'title' | 'rating' | 'published' | 'length'
  author: string
  series: string
  tags: string[]
}

type BookSettingsContextType = {
  bookSettings: BookSettings
  setBookSettings: (bookSettings: BookSettings) => void
}

const BookSettingsContext = React.createContext<BookSettingsContextType | null>(null)

export const BookSettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookSettings, setBookSettings] = React.useState<BookSettings>({
    order: 'asc',
    sort: 'series',
    author: '',
    series: '',
    tags: [],
  })

  return (
    <BookSettingsContext.Provider value={{ bookSettings, setBookSettings }}>
      {children}
    </BookSettingsContext.Provider>
  )
}

export function useBookSettings() {
  const context = React.useContext(BookSettingsContext)
  if (!context) {
    throw new Error('useBookSettings must be used within a BookSettingsProvider')
  }
  return context
}
