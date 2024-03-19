'use client'

import { useEffect } from "react"
import { TextLead } from "../ui/texts"
import { useAuth } from "@/context/authContext"
import { useRouter } from "next/navigation"

const Dashboard = () => {
  const router = useRouter()
  const { currentUser } = useAuth()

  useEffect(() => {
    if (!currentUser) {
      router.push('/login')
    }
  }, [currentUser, router])

  return (
    <div className="pb-6 flex flex-col">
      <TextLead className="mt-6 mx-6 text-center">Dashboard Page</TextLead>
    </div>
  )
}

export default Dashboard