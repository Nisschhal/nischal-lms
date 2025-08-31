"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { authClient } from "@/lib/auth-client"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import React, { useState, useTransition } from "react"
import { toast } from "sonner"

const VerifyRequest = () => {
  const params = useSearchParams()
  const email = params.get("email") as string

  const router = useRouter()
  const [emailPending, startEmailTransition] = useTransition()
  const [otp, setOtp] = useState("")
  const isOtpValid = otp.length === 6

  // Verify otp
  async function verifyOTP() {
    startEmailTransition(async () => {
      await authClient.signIn.emailOtp({
        email,
        otp,
        fetchOptions: {
          onSuccess: () => {
            router.push("/")
            toast.success("Email verified, redirecting...")
          },
          onError: (error) => {
            toast.error("Error verifying email")
            console.log(`error verifying email`, { error })
          },
        },
      })
    })
  }
  return (
    <Card className="w-full mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Please check your email</CardTitle>
        <CardDescription>
          We have sent you a verification email code to your email address.
          Please open the email and paste the code.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(value) => setOtp(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>

          <p className="text-sm text-muted-foreground">
            Enter the 6-digit code sent to your email
          </p>
        </div>

        <Button
          className="w-full"
          onClick={verifyOTP}
          disabled={!isOtpValid || emailPending}
        >
          {emailPending ? "Verifying..." : "  Verify Email"}
        </Button>
      </CardContent>
    </Card>
  )
}

export default VerifyRequest
