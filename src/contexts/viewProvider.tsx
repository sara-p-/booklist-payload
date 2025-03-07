'use client'
import React from 'react'
type ViewContextType = {
  view: 'grid' | 'list'
  handleViewChange: (view: 'grid' | 'list') => void
}

export const ViewContext = React.createContext<ViewContextType | null>(null)

export const ViewProvider = ({ children }: { children: React.ReactNode }) => {
  const [view, setView] = React.useState<'grid' | 'list'>('grid')

  function handleViewChange(view: 'grid' | 'list') {
    setView(view)
  }

  return <ViewContext.Provider value={{ view, handleViewChange }}>{children}</ViewContext.Provider>
}

export function useViewContext() {
  const context = React.useContext(ViewContext)
  if (!context) {
    throw new Error('useViewContext must be used within a ViewProvider')
  }
  return context
}
