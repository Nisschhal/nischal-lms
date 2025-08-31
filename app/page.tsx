"use client"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/themeToggle"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function Home() {
  const router = useRouter()
  const session = authClient.useSession()
  console.log(session, "session")
  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login") // redirect to login page
          toast.success("Signed out, redirecting...")
        },
      },
    })
  }
  return (
    <div>
      This is home page
      <ThemeToggle />
      {session.data ? (
        <div>
          <p>
            {session.data?.user.name}
            <Button onClick={handleLogout}>Logout</Button>
          </p>
        </div>
      ) : (
        <Button>Login</Button>
      )}
    </div>
  )
}
