import Image from "next/image"
import LoginPage from "./(auth)/login/page"
import { ThemeToggle } from "@/components/ui/themeToggle"

export default function Home() {
  return (
    <div>
      This is home page
      <ThemeToggle />
    </div>
  )
}
