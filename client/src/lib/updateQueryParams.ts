"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export function useUpdateQueryParam() {
   const router = useRouter()
   const pathname = usePathname()
   const searchParams = useSearchParams()

   const updateQueryParam = (key: string, value: string | null) => {
      const params = new URLSearchParams(searchParams.toString())

      if (value === null || value === "") {
         params.delete(key) // hapus param kalau kosong
      } else {
         params.set(key, value)
      }

      router.push(`${pathname}?${params.toString()}`, { scroll: false })
   }

   return updateQueryParam
}
