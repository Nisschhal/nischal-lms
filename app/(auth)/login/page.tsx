import { auth } from "@/lib/auth"
import LoginForm from "./_components/login-form"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

const LoginPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (session) redirect("/")

  return <LoginForm />
}

export default LoginPage
