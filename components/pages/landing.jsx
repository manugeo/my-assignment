import { TextH4, TextP } from "../ui/texts"

const Landing = () => {
  return (
    <div className="pb-6 flex flex-col">
      <TextH4 className="mt-6 mx-6 text-center">Log in to Access Dashboard</TextH4>

      <TextP className="mt-6 mx-6 text-center">{"Please log in to access the dashboard page. You can use the email 'eve.holt@reqres.in' to log in."}</TextP>
    </div>
  )
}

export default Landing