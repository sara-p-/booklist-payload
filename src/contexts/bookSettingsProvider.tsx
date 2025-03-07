'use client'
import React from 'react'
import { BookSettingsType } from '@/types/types'

type BookSettingsContextType = {
  bookSettings: BookSettingsType
  setBookSettings: (bookSettings: BookSettingsType) => void
}

const BookSettingsContext = React.createContext<BookSettingsContextType | null>(null)

export const BookSettingsProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookSettings, setBookSettings] = React.useState<BookSettingsType>({
    order: 'asc',
    search: '',
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
