import { FINANCE_DATA } from "@/lib/db"
import { useEffect, useState } from "react"

const useData = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation using setTimeout
      setTimeout(() => {
        resolve(FINANCE_DATA)
      }, 1500)
    })
  }

  useEffect(() => {
    setLoading(true)
    fetchData().then((data) => {
      setData(data)
      setLoading(false)
    })
  }, [])

  return { data, loading }
}

export default useData