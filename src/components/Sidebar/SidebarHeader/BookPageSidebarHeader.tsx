import React from 'react'
import styles from './SidebarHeader.module.css'

export default function SidebarHeader() {
  return (
    <div className={styles.sidebarHeader}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>related books</h2>
      </div>
    </div>
  )
}
