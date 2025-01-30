import React from 'react'
import headerStyles from './header.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.wrapper}>
        <Link href="/">
          <h1 className={headerStyles.h1}>
            <FontAwesomeIcon icon={faBook} style={{ width: '24px' }} /> BookList
          </h1>
        </Link>
      </div>
    </header>
  )
}
