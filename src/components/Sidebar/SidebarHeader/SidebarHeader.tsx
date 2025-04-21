import React from 'react'
import styles from './SidebarHeader.module.css'
import {
  faList,
  faSortAlphaDown,
  faSortAlphaUp,
  faTableCells,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Checkbox from '@radix-ui/react-checkbox'
import { useViewContext } from '@/contexts/viewProvider'
import { useBookSettings } from '@/contexts/bookSettingsProvider'
export default function SidebarHeader() {
  const { view, handleViewChange } = useViewContext()
  const { bookSettings, updateBookSettings } = useBookSettings()

  function orderChange(checked: boolean) {
    updateBookSettings({ ...bookSettings, order: checked ? 'desc' : 'asc' })
  }

  function viewChange(checked: boolean) {
    handleViewChange(checked ? 'list' : 'grid')
  }

  return (
    <div className={styles.sidebarHeader}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>51 books</h2>
        <div className={styles.actions}>
          <Checkbox.Root
            className={styles.actionCheckbox}
            value={view}
            name="view"
            checked={view === 'list'}
            onCheckedChange={viewChange}
          >
            {view === 'list' ? (
              <FontAwesomeIcon icon={faTableCells} style={{ width: '24px', height: 'auto' }} />
            ) : (
              <FontAwesomeIcon icon={faList} style={{ width: '24px', height: 'auto' }} />
            )}
          </Checkbox.Root>
          <Checkbox.Root
            className={styles.actionCheckbox}
            value={bookSettings.order}
            name="order"
            checked={bookSettings.order === 'desc'}
            onCheckedChange={orderChange}
          >
            {bookSettings.order === 'desc' ? (
              <FontAwesomeIcon icon={faSortAlphaUp} style={{ width: '24px', height: 'auto' }} />
            ) : (
              <FontAwesomeIcon icon={faSortAlphaDown} style={{ width: '24px', height: 'auto' }} />
            )}
          </Checkbox.Root>
          {/* <button>
            <FontAwesomeIcon icon={faSortAlphaDown} style={{ width: '24px', height: 'auto' }} />
          </button> */}
        </div>
      </div>
    </div>
  )
}
