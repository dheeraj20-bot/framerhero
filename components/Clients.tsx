import { clientImages } from "@/data"
import Image from "next/image"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"

export const Clients = () => {
  return (
    <>
        <div className="overflow-hidden px-3">
          <h2 className=" text-4xl sm:text-5xl font-bold mb-16 text-center">Companies we&apos;ve <span className="text-yellow-500">Edited for</span></h2>
        </div>
        <div className=" max-w-7xl mx-auto">
            <InfiniteMovingCards items ={clientImages} speed="fast" />
            <InfiniteMovingCards items ={clientImages} direction="right" speed="fast" />
        </div>
       
    </ >
  )
}

