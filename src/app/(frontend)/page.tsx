'use client'
import React from 'react'
import './styles.css'
import Sidebar from '@/components/Sidebar/Sidebar'
import MainContent from '@/components/MainContent/MainContent'
import useGetBooks from '@/hooks/useGetStuff'
import { BookSettingsProvider } from '@/contexts/bookSettingsProvider'
import { BookProvider, useBookContext } from '@/contexts/bookProvider'

export default function HomePage() {
  return (
    <div className="home">
      <Sidebar />
      <MainContent />
    </div>
  )
}
