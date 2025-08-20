import { Search } from "lucide-react"

const SearchBar = () => {
   return (
      <div className="hidden sm:flex items-center gap-2 border border-gray-200 ring-gray-200 rounded-full px-4 py-2">
         <Search className="size-4 text-gray-500" />
         <input
            type="text"
            placeholder="Search..."
            className="text-sm outline-0"
         />
      </div>
   )
}

export default SearchBar
