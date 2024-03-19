import ProtectedRoute from "../protected-route"
import { TextLead } from "../ui/texts"

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <div className="pb-6 flex flex-col">
        <TextLead className="mt-6 mx-6 text-center">Dashboard Page</TextLead>
      </div>
    </ProtectedRoute>
  )
}

export default Dashboard