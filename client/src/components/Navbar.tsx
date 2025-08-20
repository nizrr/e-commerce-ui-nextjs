import Image from "next/image"
import Link from "next/link"
import React from "react"
import SearchBar from "./SearchBar"
import { Bell, Home, ShoppingCart } from "lucide-react"

const Navbar = () => {
   return (
      <nav className="flex items-center justify-between border-b border-gray-200 pb-4">
         {/* Left */}
         <Link
            href="/"
            className="flex items-center">
            <Image
               src="/logo.png"
               width={36}
               height={36}
               alt="logo"
               className="size-6 md:size-9"
            />
            <p className="hidden md:block text-md font-medium tracking-wider">ONLINESHOP</p>
         </Link>
         {/* Right */}
         <div className="flex items-center gap-6">
            <SearchBar />
            <Link href="/cart">
               <Home className="size-4 md:size-5 text-gray-600" />
            </Link>
            <Bell className="size-4 md:size-5 text-gray-600" />
            <ShoppingCart className="size-4 md:size-5 text-gray-600" />
            <Link href="/sign-in">Sign In </Link>
         </div>
      </nav>
   )
}

export default Navbar
