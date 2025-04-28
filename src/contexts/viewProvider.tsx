'use client'
import React from 'react'
type ViewContextType = {
  listView: boolean
  handleViewChange: (listView: boolean) => void
}

export const ViewContext = React.createContext<ViewContextType | null>(null)

export const ViewProvider = ({ children }: { children: React.ReactNode }) => {
  const [listView, setListView] = React.useState(false)

  function handleViewChange(listView: boolean) {
    setListView(!listView)
  }

  console.log('listView:', listView)

  return (
    <ViewContext.Provider value={{ listView, handleViewChange }}>{children}</ViewContext.Provider>
  )
}

export function useViewContext() {
  const context = React.useContext(ViewContext)
  if (!context) {
    throw new Error('useViewContext must be used within a ViewProvider')
  }
  return context
}
