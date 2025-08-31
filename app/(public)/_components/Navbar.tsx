import Image from "next/image"
import Link from "next/link"
import React from "react"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-[backdrop-filter]:bg-background/60">
      {/* logo */}
      <div className="container flex min-h-16 items-center mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            className="bg-[#a3570f] rounded-md p-1"
            alt="logo"
            width={32}
            height={32}
          />
          <span className="font-bold"> NischalLMS.</span>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
