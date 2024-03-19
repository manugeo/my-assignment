'use client'

import { useEffect } from "react"
import { TextLead } from "../ui/texts"
import { useAuth } from "@/context/authContext"
import { useRouter } from "next/navigation"
import { Bar } from "react-chartjs-2"
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
}

const barChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

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

      <Bar data={barChartData} options={barChartOptions} />
    </div>
  )
}

export default Dashboard