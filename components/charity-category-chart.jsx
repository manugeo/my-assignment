import { Doughnut } from "react-chartjs-2"
import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  Title,
  Tooltip
} from "chart.js"
import { useCallback, useEffect, useState } from "react"
import { Skeleton } from "./ui/skeleton"
import { formatNumber } from "@/lib/utils"

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title
)

const CharityCategoryChart = ({ data, className, ...props }) => {
  const [chartData, setChartData] = useState(null)
  const [totalCharity, setTotalCharity] = useState(null)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Charity Expenditure by Category${totalCharity ? ` (Total: $${formatNumber(totalCharity)})` : ''}`,
      }
    }
  }


  const prepareChartData = useCallback(() => {
    const chartData = {
      labels: ['Category 1', 'Category 2', 'Category 3'],
      datasets: [
        {
          data,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }
      ]
    }
    setChartData(chartData)
    setTotalCharity((data && (data.length === 3)) ? data.reduce((a, b) => a + b, 0) : null)
  }, [data])

  useEffect(() => {
    prepareChartData()
  }, [prepareChartData])

  return (
    (!data || !data.length || !chartData)
      ? <Skeleton className="w-full h-60 mt-6" {...props} />
      : <Doughnut data={chartData} options={options} className={className} />
  )
}

export default CharityCategoryChart