'use client'
import React from "react"
import { useWorkStore } from "./store"
import Image from "next/image"

type WorkCardProps = {
    gradient:String
    children:React.ReactNode
} & CardProps



type CardProps ={
    id:String
}

const WorkCard = ({gradient,children,id}:WorkCardProps) => {
    const inViewWork = useWorkStore(state =>state.inViewFeature)

  return (
    <div className={`${gradient} ${inViewWork === id?"opacity-100":"opacity-0"}
     absolute inset-0 h-full w-full rounded-2xl text-black-100  transition-opacity bg-gradient-to-br `}>
         {children}
    </div>
  )
}

export const Upload = ({id}:CardProps)=>{
    return(
        <WorkCard id={id} gradient="">
            <div className="flex flex-col items-center justify-center h-full">
            <Image
             src="/upload.webp"
             width={1000}
             height={1000}
             alt="Upload your footage"
             className="rounded-xl object-cover w-full h-full"
             />
            </div>
            
        </WorkCard>
    )
}

export const Tell = ({id}:CardProps)=>{
    return(
        <WorkCard id={id} gradient="bg-gradient-to-br from-yellow-500 to-orange-500">
           <div className="flex flex-col items-center justify-center h-full">
            <Image
             src="/tell.webp"
             width={1000}
             height={1000}
             alt="Tell us what you want "
             className="rounded-xl object-cover w-full h-full"
             />
            </div>
        </WorkCard>
    )
}

export const Review = ({id}:CardProps)=>{
    return(
        <WorkCard id={id} gradient="bg-gradient-to-br from-red-500 to-purple-500">
             <div className="flex flex-col items-center justify-center h-full">
            <Image
             src="/review.webp"
             width={1000}
             height={1000}
             alt="Tell us what you want "
             className="rounded-xl object-cover w-full h-full"
             />
            </div>
        </WorkCard>
    )
}

export const Changes = ({id}:CardProps)=>{
    return(
        <WorkCard id={id} gradient="bg-gradient-to-br from-pink-500 to-red-500">
            <div className="flex flex-col items-center justify-center h-full">
            <Image
             src="/need.webp"
             width={1000}
             height={1000}
             alt="Tell us what you want "
             className="rounded-xl object-cover w-full h-full"
             />
            </div>
        </WorkCard>
    )
}

export const Happy = ({id}:CardProps)=>{
    return(
        <WorkCard id={id} gradient="bg-gradient-to-br from-teal-500 to-blue-500">
            <div className="flex flex-col items-center justify-center h-full">
            <Image
             src="/love.webp"
             width={1000}
             height={1000}
             alt="Tell us what you want "
             className="rounded-xl object-cover w-full h-full"
             />
            </div>
        </WorkCard>
    )
}
