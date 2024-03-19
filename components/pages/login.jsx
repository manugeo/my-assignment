'use client'

import { useState } from "react"
import InputText from "../inputs/input-text"
import { Button } from "../ui/button"
import { TextH3 } from "../ui/texts"

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const onInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const onLogin = (e) => {
    e.preventDefault()
    console.log(credentials)
  }

  return (
    <div className="flex-grow pb-6 flex flex-col justify-center items-center">
      <form className="w-full max-w-sm pb-4" onSubmit={onLogin}>
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