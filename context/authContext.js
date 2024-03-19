'use client'

import { createContext, useContext } from "react"
import useCurrentUser from "@/hooks/useCurrentUser"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const { currentUser, handleUserToken, logoutUser} = useCurrentUser()
  return (
    <AuthContext.Provider value={{ currentUser, handleUserToken, logoutUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)