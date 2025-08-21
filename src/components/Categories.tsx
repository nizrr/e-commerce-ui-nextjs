"use client"

import { useUpdateQueryParam } from "@/lib/updateQueryParams"
import { cn } from "@/lib/utils"
import { Briefcase, Footprints, Glasses, Hand, Shirt, ShoppingBasket, Venus } from "lucide-react"
import { useSearchParams } from "next/navigation"

const categories = [
   {
      id: 1,
      name: "All",
      icon: <ShoppingBasket className="size-4" />,
      slug: "all",
   },
   {
      id: 2,
      name: "T-Shirts",
      icon: <Shirt className="size-4" />,
      slug: "t-shirts",
   },
   {
      id: 3,
      name: "Shoes",
      slug: "shoes",
      icon: <Footprints className="size-4" />,
   },
   {
      id: 4,
      name: "Accessories",
      slug: "accessories",
      icon: <Glasses className="size-4" />,
   },
   {
      id: 5,
      name: "Bags",
      slug: "bags",
      icon: <Briefcase className="size-4" />,
   },
   {
      id: 6,
      name: "Dresses",
      slug: "dresses",
      icon: <Venus className="size-4" />,
   },
   {
      id: 7,
      name: "Jackets",
      slug: "jackets",
      icon: <Shirt className="size-4" />,
   },
   {
      id: 8,
      name: "Gloves",
      slug: "gloves",
      icon: <Hand className="size-4" />,
   },
]

const Categories = () => {
   const searchParams = useSearchParams()
   const updateQueryParams = useUpdateQueryParam()
   const handleChange = (value: string) => {
      updateQueryParams("category", value)
   }
   const currentCategory = searchParams.get("category") || "all"

   return (
      <div className="bg-gray-100 rounded-lg py-2 px-2 mb-4">
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2">
            {categories.map(category => (
               <div
                  key={category.id}
                  onClick={() => handleChange(category.slug)}
                  className={cn(
                     "flex items-center justify-center cursor-pointer hover:bg-white hover:text-black py-2 rounded-lg text-gray-500 text-sm transition-all duration-200 ease-in-out",
                     currentCategory === category.slug && "bg-white  text-black font-medium"
                  )}>
                  <div className="flex gap-1.5 items-center">
                     {category.icon}
                     {category.name}
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default Categories
