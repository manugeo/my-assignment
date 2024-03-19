'use client'

import { useState } from "react"
import InputText from "../inputs/input-text"
import { Button } from "../ui/button"
import { TextH3 } from "../ui/texts"
import useNotify from "@/hooks/useNotify"
import { validateEmail } from "@/lib/utils"
import { useRouter } from "next/navigation"

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const { notify } = useNotify()
  const router = useRouter()

  const handleLogin = async ({ email, password }) => {
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    if (response.ok) {
      const { token } = await response.json()
      localStorage.setItem('my-assignment-token', token)
      router.push('/dashboard')
      notify('Login successful.', 'success')
    }
    else {
      const { error } = await response.json()
      notify(error, 'error')
    }
  }

  const onInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const onLoginClick = (e) => {
    e.preventDefault()
    const email = credentials.email.trim()
    if (!email || !validateEmail(email)) {
      notify('Please enter a valid email.', 'error')
      return
    }
    const password = credentials.password.trim()
    if (!password || password.length < 8) {
      notify('Please enter a valid password.', 'error')
      return
    }

    handleLogin({ email, password })
  }

  return (
    <div className="flex-grow pb-6 flex flex-col justify-center items-center">
      <form className="w-full max-w-sm px-4 pb-4" onSubmit={onLoginClick}>
        <TextH3 className="mt-4 text-center">Sign In to Your Account</TextH3>

        <InputText className="mt-6" inputClassName="text-sm font-medium leading-none"
          label="Email" id="email" name="email" placeholder="Enter your email" type="email" required
          value={credentials.email} onChange={onInputChange} autoComplete="email" autoFocus />

        <InputText className="mt-4" inputClassName="text-sm font-medium leading-none"
          label="Password" id="password" name="password" placeholder="Enter your password" type="password" required
          value={credentials.password} onChange={onInputChange} autoComplete="current-password" minLength={8} />

        <Button className="mt-4 w-full" type="submit">Login</Button>
      </form>
    </div>
  )
}

export default Login