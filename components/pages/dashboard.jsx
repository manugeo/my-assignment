'use client'

import { useEffect, useMemo, useState } from "react"
import { TextH3 } from "../ui/texts"
import { useAuth } from "@/context/authContext"
import { useRouter } from "next/navigation"
import useData from "@/hooks/useData"
import RevenueProfitChart from "../revenue-profit-chart"
import PageButtons from "../page-buttons"
import CharityCategoryChart from "../charity-category-chart"

const Dashboard = () => {
  const router = useRouter()
  const { currentUser } = useAuth()
  const { data } = useData()
  const [currentPage, setCurrentPage] = useState(null)
  const [totalPages, setTotalPages] = useState(null)
  const [dataToDisplay, setDataToDisplay] = useState([])
  const [charityDataToDisplay, setCharityDataToDisplay] = useState(null)

  useEffect(() => {
    if (!data && !data.length) {
      setCurrentPage(null)
      setTotalPages(null)
      setDataToDisplay([])
      setCharityDataToDisplay(null)
      return
    }
    setCurrentPage(1)
    setTotalPages(Math.ceil(data.length / 12))
    const newDataToDisplay = data.slice(0, 12)
    setDataToDisplay(newDataToDisplay)
    const newCharityDataToDisplay = calculateCharityData(newDataToDisplay)
    setCharityDataToDisplay(newCharityDataToDisplay)
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
        const newDataToDisplay = data.slice((nextPage - 1) * 12, nextPage * 12)
        setDataToDisplay(newDataToDisplay)
        setCharityDataToDisplay(calculateCharityData(newDataToDisplay))
        setCurrentPage(nextPage)
      }
    }
    else if (change === 'previous') {
      if (currentPage > 1) {
        const previousPage = currentPage - 1
        const newDataToDisplay = data.slice((previousPage - 1) * 12, previousPage * 12)
        setDataToDisplay(newDataToDisplay)
        setCharityDataToDisplay(calculateCharityData(newDataToDisplay))
        setCurrentPage(previousPage)
      }
    }
  }

  const calculateCharityData = (displayData) => {
    if (!displayData || !displayData.length) return null
    const charityData = [0, 0, 0]
    for (let i = 0; i < displayData.length; i++) {
      const charityCategory = displayData[i].charity.category
      const charityFund = displayData[i].charity.fund
      switch (charityCategory) {
        case 'Category 1':
          charityData[0] += charityFund
          break;
        case 'Category 2':
          charityData[1] += charityFund
          break;
        case 'Category 3':
          charityData[2] += charityFund
          break;
        default:
          break;
      }
    }
    return charityData
  }

  const maxRevenue = useMemo(() => {
    let maxRevenue = 0
    for (let i = 0; i < data.length; i++) {
      if (data[i].revenue > maxRevenue) {
        maxRevenue = data[i].revenue
      }
    }
    return maxRevenue
  }, [data])

  return (
    <div className="px-6 pb-6 flex flex-col">
      <TextH3 className="mt-6">Finance</TextH3>

      {(currentPage && totalPages)
        ? <PageButtons totalPages={totalPages} currentPage={currentPage} className="mt-6"
          onNext={() => handlePageChange('next')} onPrevious={() => handlePageChange('previous')} />
        : null}

      <div className="mt-6 overflow-x-auto">
        <div className="min-w-[720px] flex justify-center">
          <RevenueProfitChart data={dataToDisplay} maxRevenue={maxRevenue} />
        </div>
      </div>

      <CharityCategoryChart className="mt-6 max-h-[300px]" data={charityDataToDisplay} />

      {(currentPage && totalPages)
        ? <PageButtons totalPages={totalPages} currentPage={currentPage} className="mt-6"
          onNext={() => handlePageChange('next')} onPrevious={() => handlePageChange('previous')} />
        : null}
    </div>
  )
}

export default Dashboard