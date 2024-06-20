import { clientImages } from "@/data"
import Image from "next/image"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

export const Clients = () => {
  return (
    <>
        
       
       <h2 className=" text-center  text-transparent 
        bg-clip-text  bg-gradient-to-b  from-white to-gray-400 
          mb-10 font-semibold text-4xl sm:text-6xl">Our Valued <span className="text-yellow-500">Clients</span></h2>
                
        <div className=" max-w-7xl mx-auto">
            <InfiniteMovingCards items ={clientImages.slice(0,10)} speed="slow" />
            <InfiniteMovingCards items ={clientImages.slice(10)} direction="right" speed="slow" />
        </div>
       
    </ >
  )
}

