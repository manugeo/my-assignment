'use client'

import { useEffect, useMemo, useState } from "react"
import { TextH3 } from "../ui/texts"
import { useAuth } from "@/context/authContext"
import { useRouter } from "next/navigation"
import useData from "@/hooks/useData"
import RevenueProfitChart from "../revenue-profit-chart"
import PageButtons from "../page-buttons"

const Dashboard = () => {
  const router = useRouter()
  const { currentUser } = useAuth()
  const { data } = useData()
  const [currentPage, setCurrentPage] = useState(null)
  const [totalPages, setTotalPages] = useState(null)
  const [dataToDisplay, setDataToDisplay] = useState([])

  useEffect(() => {
    if (!data && !data.length) {
      setCurrentPage(null)
      setTotalPages(null)
      setDataToDisplay([])
      return
    }

    setCurrentPage(1)
    setTotalPages(Math.ceil(data.length / 12))
    setDataToDisplay(data.slice(0, 12))
  }, [data])

  useEffect(() => {
    if (!currentUser) {
      router.push('/login')
    }
  }, [currentUser, router])

  const handlePageChange = (change = 'next') => {
    if (change === 'next') {
      if (currentPage < totalPages) {
        const nextPage = currentPage + 1
        setDataToDisplay(data.slice((nextPage - 1) * 12, nextPage * 12))
        setCurrentPage(nextPage)
      }
    }
    else if (change === 'previous') {
      if (currentPage > 1) {
        const previousPage = currentPage - 1
        setDataToDisplay(data.slice((previousPage - 1) * 12, previousPage * 12))
        setCurrentPage(previousPage)
      }
    }
  }

  const maxRevenue = useMemo(() => {
    let maxRevenue = 0
    for (let i = 0; i < data.length; i++) {
      if (data[i].revenue > maxRevenue) {
        maxRevenue = data[i].revenue
      }
    }
    console.log({ maxRevenue });

    return maxRevenue
  }, [data])

  return (
    <div className="px-6 pb-6 flex flex-col">
      <TextH3 className="mt-6">Finance</TextH3>
      <RevenueProfitChart className="mt-6" data={dataToDisplay} maxRevenue={maxRevenue} />

      {(currentPage && totalPages)
        ? <PageButtons totalPages={totalPages} currentPage={currentPage} className="mt-6"
          onNext={() => handlePageChange('next')} onPrevious={() => handlePageChange('previous')} />
        : null}
    </div>
  )
}

export default Dashboard