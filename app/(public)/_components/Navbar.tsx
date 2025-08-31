"use client"
import { buttonVariants } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/themeToggle"
import { authClient } from "@/lib/auth-client"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import ProfileDropdown from "./Profile"

const navigationItems = [
  {
    name: "Home",
    href: "/",
  },
  { name: "Courses", href: "/courses" },
  { name: "Dashboard", href: "/dashboard" },
]

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-[backdrop-filter]:bg-background/60">
      {/* logo */}
      <div className="container flex min-h-16 items-center mx-auto px-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 mr-4">
          <Image
            src="/logo.svg"
            className="bg-[#a3570f] rounded-md p-1"
            alt="logo"
            width={32}
            height={32}
          />
          <span className="font-bold"> NischalLMS.</span>
        </Link>

        {/* Desktop Nav Menu */}
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="flex items-center space-x-2 md:space-x-6">
            {navigationItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="text-sm font-medium text-white/80 transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {isPending ? null : session ? (
              <ProfileDropdown
                email={session.user.email}
                name={session.user.name}
                image={session.user.image || ""}
              />
            ) : (
              <>
                <Link
                  href={"/login"}
                  className={buttonVariants({ variant: "secondary" })}
                >
                  Login
                </Link>
                <Link href={"/login"} className={buttonVariants()}>
                  Get Started
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
