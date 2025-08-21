"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Label } from "./ui/label"
import { useUpdateQueryParam } from "@/lib/updateQueryParams"

const Filter = () => {
   const updateQueryParams = useUpdateQueryParam()
   const handleFilter = (value: string) => {
      updateQueryParams("sort", value)
   }
   return (
      <div className="flex justify-end items-center gap-2 mb-3 text-sm text-gray-500">
         <Label>Sort By :</Label>
         <Select
            defaultValue="newest"
            onValueChange={value => handleFilter(value)}>
            <SelectTrigger className="w-[180px]">
               <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
               <SelectItem value="newest">Newest</SelectItem>
               <SelectItem value="oldest">Oldest</SelectItem>
               <SelectItem value="asc">Price : Low to High</SelectItem>
               <SelectItem value="desc">Price : High to Low</SelectItem>
            </SelectContent>
         </Select>
      </div>
   )
}

export default Filter
