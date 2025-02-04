import React from 'react'
import styles from './SidebarHeader.module.css'
import { faList, faSortAlphaDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SidebarHeader() {
  return (
    <div className={styles.sidebarHeader}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>51 books</h2>
        <div className={styles.actions}>
          <button>
            <FontAwesomeIcon icon={faList} style={{ width: '24px', height: 'auto' }} />
          </button>
          <button>
            <FontAwesomeIcon icon={faSortAlphaDown} style={{ width: '24px', height: 'auto' }} />
          </button>
        </div>
      </div>
    </div>
  )
}
