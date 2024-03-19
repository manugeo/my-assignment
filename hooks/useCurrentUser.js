import { useEffect, useState } from "react";

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('my-assignment-token')
    if (!token) return
    setCurrentUser({ token }) 
  }, [])

  const handleUserToken = (token) => {
    if (!token) return
    localStorage.setItem('my-assignment-token', token)
    setCurrentUser({ token })
  }

  const logoutUser = () => {
    localStorage.removeItem('my-assignment-token')
    setCurrentUser(null)
  }

  return { currentUser, handleUserToken, logoutUser }
}

export default useCurrentUser;