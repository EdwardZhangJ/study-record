import { useState, useEffect } from "react"

function useLocalStorage(key) {
  const [data, setData ] = useState(localStorage.getItem(key))

  useEffect(() => {
    localStorage.setItem(key, data)
  }, [data])

  return [data, setData]
}

export default useLocalStorage
