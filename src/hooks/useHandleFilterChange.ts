import { useBookSettings } from '@/contexts/bookSettingsProvider'

export function useHandleFilterChange() {
  const { bookSettings, updateBookSettings } = useBookSettings()
  const newBookSettings = { ...bookSettings }

  function handleFilterChange(filter: string, value: string) {
    if (filter === 'tags') {
      if (newBookSettings.tags.includes(value)) {
        newBookSettings.tags = newBookSettings.tags.filter((t) => t !== value)
        updateBookSettings(newBookSettings)
      } else {
        newBookSettings.tags = [...newBookSettings.tags, value]
        updateBookSettings(newBookSettings)
      }
    } else {
      updateBookSettings({ ...newBookSettings, [filter]: value })
    }
  }

  return { handleFilterChange }
}
