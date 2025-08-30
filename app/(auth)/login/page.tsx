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
import { Github, Loader } from "lucide-react"
import React, { useTransition } from "react"
import { toast } from "sonner"

const LoginPage = () => {
  const [githubPending, startGithubTransition] = useTransition()
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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl ">Welcome back!</CardTitle>
        <CardDescription>Login with your Github Email Account</CardDescription>
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
            <Input id="email" type="email" placeholder="example@gmail.com" />
          </div>
          <Button>Continue with Email</Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default LoginPage
