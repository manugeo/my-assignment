import { useRouter } from "next/navigation"
import { useEffect } from "react"

const ProtectedRoute = ({ children }) => {
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('my-assignment-token')
    if (!token) {
      router.push('/login')
    }
  }, [router])

  return children
}

export default ProtectedRoute