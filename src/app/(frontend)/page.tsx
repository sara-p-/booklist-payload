'use client'
import React from 'react'
import './styles.css'
import Sidebar from '@/components/Sidebar/Sidebar'
import MainContent from '@/components/MainContent/MainContent'
import useGetBooks from '@/hooks/useGetBooks'

export default function HomePage() {
  const { data } = useGetBooks()

  return (
    <div className="home">
      <Sidebar books={data?.docs} />
      <MainContent books={data?.docs} />
    </div>
  )
}
