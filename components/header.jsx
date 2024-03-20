'use client'

import Link from "next/link"
import MainNav from "./main-nav"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { useAuth } from "@/context/authContext"

const Header = () => {
  const { currentUser, logoutUser } = useAuth()
  return (
    <div className="w-full h-16 px-4 bg-slate-200 flex items-center">
      <Link href={currentUser ? '/dashboard' : '/'}>
        <Avatar>
          <AvatarImage src="/logo.png" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      </Link>

      <MainNav className=" hidden md:flex mx-4" />

      <Button className={`${currentUser ? 'hidden' : ''} ml-auto`} asChild>
        <Link href="/login">Login</Link>
      </Button>

      <Button variant="secondary" className={`${currentUser ? 'hidden' : ''} ml-4`}>
        <Link href="/register">Register</Link>
      </Button>

      <Button className={`${currentUser ? '' : 'hidden'} ml-auto`} onClick={logoutUser}>Logout</Button>
    </div>
  )
}

export default Header