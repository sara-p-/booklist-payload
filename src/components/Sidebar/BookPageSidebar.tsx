'use client'

import React from 'react'
import styles from './Sidebar.module.css'
import BookPageSidebarHeader from './SidebarHeader/BookPageSidebarHeader'

export default function BookPageSidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.wrapper}>
        <BookPageSidebarHeader />
      </div>
    </div>
  )
}
