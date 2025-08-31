"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { authClient } from "@/lib/auth-client"
import { emailOTP } from "better-auth/plugins"
import { Github, Loader, Send } from "lucide-react"
import { useRouter } from "next/navigation"
import React, { useState, useTransition } from "react"
import { toast } from "sonner"

const LoginForm = () => {
  const [githubPending, startGithubTransition] = useTransition()
  const [emailPending, startEmailTransition] = useTransition()
  const [email, setEmail] = useState("")

  const router = useRouter()

  // Github login
  const handleGithubLogin = async () => {
    startGithubTransition(async () => {
      await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
        fetchOptions: {
          onSuccess: () => {
            toast.success("Signed in with Github, redirecting...")
          },
          onError: (error) => {
            toast.error("Error signing in with Github")
          },
        },
      })
    })
  }

  // Send email verification for sign in
  const sendEmailVerfication = async () => {
    // check if email is valid
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // if (!emailRegex.test(email)) {
    //   toast.error("Invalid email")
    //   return
    // }

    startEmailTransition(async () => {
      await authClient.emailOtp.sendVerificationOtp({
        email,
        type: "sign-in",
        fetchOptions: {
          onSuccess: () => {
            router.push("/verify-request?email=" + email)
            toast.success("Email sent, check your inbox")
          },
          onError: (error) => {
            toast.error(error.error.message || "Error sending email")
            console.log(`error sending email`, { error })
          },
        },
      })
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl ">Welcome back!</CardTitle>
        <CardDescription>
          Login with your Github or Email Account
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <Button
          disabled={githubPending}
          onClick={handleGithubLogin}
          className="w-full"
          variant={"outline"}
        >
          {githubPending ? (
            <>
              <Loader className="mr-2 h-4 w-4 animate-spin" />
              <span>Signing in...</span>
            </>
          ) : (
            <>
              <Github className="mr-2 h-4 w-4" />
              Sign in with Github
            </>
          )}
        </Button>

        {/* Divider */}
        <div className="relative text-center  after:absolute after:inset-0 after:z-5 after:border-t after:border-border after:top-1/2">
          <span className=" relative z-10 bg-card px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>

        {/* Email signin form */}
        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>
          {/* Submit button */}
          <Button
            disabled={emailPending || !email}
            onClick={sendEmailVerfication}
            className="w-full"
          >
            {emailPending ? (
              <>
                <Loader className=" h-4 w-4 animate-spin" />
                <span>Loading...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Continue with Email</span>
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default LoginForm
