import { useState, useEffect } from "react"

function useLocalStorage(key) {
  const [data, setData] = useState(() => {
    const storageData = localStorage.getItem(key)
    if (!storageData) return ("")
    return JSON.parse(storageData)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data))
  }, [key, data])

  return [data, setData]
}

export default useLocalStorage
