'use client'

import React from 'react'

type ThemeContextType = {
  theme: 'light' | 'dark'
  handleThemeChange: (theme: 'light' | 'dark') => void
}

export const ThemeContext = React.createContext<ThemeContextType | null>(null)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

  function handleThemeChange(theme: 'light' | 'dark') {
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>{children}</ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = React.useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}
