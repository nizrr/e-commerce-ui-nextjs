"use client"
import { ProductType } from "@/types"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const ProductCard = ({ product }: { product: ProductType }) => {
   const [productTypes, setProductTypes] = useState({
      size: product.sizes[0],
      color: product.colors[0],
   })
   const handleProductType = ({ type, value }: { type: "size" | "color"; value: string }) =>
      setProductTypes({ ...productTypes, [type]: value })

   return (
      <div className="rounded-lg shadow-lg overflow-hidden group border border-gray-100 hover:border-black transition-all duration-500 ease-in-out">
         <Link href={`/products/${product.id}`}>
            <div className="relative aspect-[2/3]">
               <Image
                  src={product.images[productTypes.color]}
                  alt={product.name}
                  fill
                  sizes="( max-width: 768px ) 100vw, ( max-width: 1200px ) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
               />
            </div>
         </Link>
         <div className="flex flex-col gap-2 p-4">
            {/* Product Details */}
            <h1 className="font-medium text-lg">{product.name}</h1>
            <p className="text-sm text-gray-500">{product.shortDescription}</p>
            {/* Product Types */}
            <div className="flex gap-4 items-start">
               {/* Sizes */}
               <div className="flex flex-col gap-1">
                  <span className="text-sm text-gray-500">Size</span>
                  <select
                     name="size"
                     id="size"
                     className="ring ring-gray-300 rounded-md px-2 py-1 text-sm cursor-pointer"
                     onChange={e => handleProductType({ type: "size", value: e.target.value })}>
                     {product.sizes.map(size => (
                        <option
                           key={size}
                           value={size}
                           className="ring ring-gray-500 text-sm">
                           {size.toUpperCase()}
                        </option>
                     ))}
                  </select>
               </div>
               {/* Colors */}
               <div className="flex flex-col gap-1">
                  <span className="text-sm text-gray-500">Color</span>
                  <div className="flex items-center gap-2">
                     {product.colors.map(color => (
                        <div
                           key={color}
                           className="cursor-pointer"
                           onClick={() => handleProductType({ type: "color", value: color })}>
                           <div
                              className={`size-7 rounded-full outline-2 outline-offset-2 outline-gray-300 ${
                                 color === productTypes.color
                                    ? "outline-2 outline-offset-2 outline-blue-600!"
                                    : ""
                              }`}
                              style={{ backgroundColor: color }}
                           />
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            {/* Price and Add To Cart Button */}
            <div className="flex justify-between items-end">
               <div className="flex flex-col">
                  <span className="text-sm text-gray-500">Price</span>
                  <p className="text-lg font-medium">${product.price.toFixed(2)}</p>
               </div>
               <button className="border border-gray-300 rounded-md px-4 py-2 hover:bg-black hover:text-white transition-all duration-300 ease-in-out flex items-center gap-2">
                  <ShoppingCart className="size-4" /> Add To Cart
               </button>
            </div>
         </div>
      </div>
   )
}

export default ProductCard
