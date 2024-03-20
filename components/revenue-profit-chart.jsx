'use client'

import { Bar } from "react-chartjs-2"
import {
  Chart as ChartJS, BarController, BarElement, CategoryScale, Legend,
  LineController, LineElement, LinearScale, PointElement, Title, Tooltip
} from "chart.js"
import { Skeleton } from "./ui/skeleton"
import { useCallback, useEffect, useState } from "react"
import { formatNumber } from "@/lib/utils"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController
)

const options = {
  responsive: true,
  type: 'bar',
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Revenue and Profit by Year and Month',
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Year and Month',
      }
    },
    y: {
      title: {
        display: true,
        text: 'Revenue and Profit',
      },
      ticks: {
        callback: (value) => formatNumber(value)
      }
    },
  }
}

const RevenueProfitChart = ({ data }) => {
  const [chartData, setChartData] = useState(null)

  const prepareChartData = useCallback(() => {
    if (!data || !data.length) {
      setChartData(null)
      return
    }
    const newChartData = {
      labels: data.map(d => d.dateStr),
      datasets: [
        {
          type: 'line',
          label: 'Profit',
          data: data.map(d => d.profit),
          borderColor: '#9d174d',
          borderWidth: 2,
          fill: false
        },
        {
          type: 'bar',
          label: 'Revenue',
          data: data.map(d => d.revenue),
          backgroundColor: '#020617',
        }
      ]
    }
    setChartData(newChartData)
  }, [data])

  useEffect(() => {
    prepareChartData()
  }, [data, prepareChartData])

  return (
    (!data || !data.length || !chartData)
      ? <Skeleton className={"w-full h-60 mt-6"} />
      : <Bar data={chartData} options={options} />
  )
}

export default RevenueProfitChart