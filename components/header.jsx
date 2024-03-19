import Link from "next/link"
import MainNav from "./main-nav"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <div className="w-full h-16 px-4 bg-slate-200 flex items-center">
      <Link href='/'>
        <Avatar>
          <AvatarImage src="/logo.png" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      </Link>

      <MainNav className="mx-4" />

      <Button className="ml-auto" asChild>
        <Link href="/login">Login</Link>
      </Button>

      <Button variant="secondary" className="ml-4">
        <Link href="/register">Register</Link>
      </Button>

      <Button className="hidden ml-4">Logout</Button>
    </div>
  )
}

export default Header