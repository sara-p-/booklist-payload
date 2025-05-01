'use client'
import './styles.css'
import Sidebar from '@/components/Sidebar/Sidebar'
import MainContent from '@/components/MainContent/MainContent'

export default function HomePage() {
  return (
    <div className="home">
      <Sidebar />
      <MainContent />
    </div>
  )
}
