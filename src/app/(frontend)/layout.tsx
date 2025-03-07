import React from 'react'
import './styles.css'
import Header from '@/components/Header/Header'
import { Inter } from 'next/font/google'
import { BookProvider } from '@/contexts/bookProvider'
import { BookSettingsProvider } from '@/contexts/bookSettingsProvider'
import { ViewProvider } from '@/contexts/viewProvider'
import { ThemeProvider } from '@/contexts/themeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'BookList Payload',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className={inter.className}>
      <ThemeProvider>
        <ViewProvider>
          <BookSettingsProvider>
            <BookProvider>
              <body>
                <Header />
                <main>{children}</main>
              </body>
            </BookProvider>
          </BookSettingsProvider>
        </ViewProvider>
      </ThemeProvider>
    </html>
  )
}
