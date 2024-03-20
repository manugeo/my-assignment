'use client'

import { useEffect, useState } from "react"
import { TextH3 } from "../ui/texts"
import { useAuth } from "@/context/authContext"
import { useRouter } from "next/navigation"
import useData from "@/hooks/useData"
import RevenueProfitChart from "../revenue-profit-chart"

const Dashboard = () => {
  const router = useRouter()
  const { currentUser } = useAuth()
  const { data } = useData()
  const [dataToDisplay, setDataToDisplay] = useState([])

  useEffect(() => {
    setDataToDisplay(data.slice(0, 12))
  }, [data])

  useEffect(() => {
    if (!currentUser) {
      router.push('/login')
    }
  }, [currentUser, router])

  return (
    <div className="px-6 pb-6 flex flex-col">
      <TextH3 className="mt-6">Finance</TextH3>
      <RevenueProfitChart data={dataToDisplay} />
    </div>
  )
}

export default Dashboard