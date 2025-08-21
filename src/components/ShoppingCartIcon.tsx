import { ShoppingCart } from "lucide-react"
import Link from "next/link"

const ShoppingCartIcon = () => {
   return (
      <Link
         href="/cart"
         className="relative">
         <ShoppingCart className="size-4 md:size-5 text-gray-600" />

         <span className="absolute -top-3.5 -right-3.5 rounded-full w-6 bg-amber-400 aspect-square flex items-center justify-center text-xs text-gray-600 p-1">
            22
         </span>
      </Link>
   )
}

export default ShoppingCartIcon
