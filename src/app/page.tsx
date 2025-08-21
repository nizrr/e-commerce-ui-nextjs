import ProductList from "@/components/ProductList"
import Image from "next/image"

const Homepage = async ({ searchParams }: { searchParams: Promise<{ category: string }> }) => {
   const category = (await searchParams).category
   return (
      <div className="">
         <div className="relative aspect-[3/1] mb-12">
            <Image
               src={"/featured.png"}
               alt="Featured Image"
               fill
               sizes="( max-width: 768px ) 100vw, ( max-width: 1200px ) 50vw, 33vw"
               priority
            />
         </div>
         <ProductList
            category={category}
            params="homepage"
         />
      </div>
   )
}

export default Homepage
