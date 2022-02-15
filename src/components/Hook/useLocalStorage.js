import React from 'react'

function useLocalStorage({ initialValue, name }) {
  const [items, setItems] = React.useState(initialValue)
  React.useEffect(() => {
    const localStorageItem = localStorage.getItem(name)
    let parsedItem
    if (!localStorageItem) {
      localStorage.setItem(name, JSON.stringify(initialValue))
      parsedItem = initialValue
    } else {
      parsedItem = JSON.parse(localStorageItem)
    }
    setItems(parsedItem)
  }, [])
  const saveItems = newItems => {
    localStorage.setItem(name, JSON.stringify(newItems))
    setItems(newItems)
  }
  return { items, saveItems }
}

export { useLocalStorage }
