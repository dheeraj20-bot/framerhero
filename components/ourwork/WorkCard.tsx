'use client'
import React from "react"
import { useWorkStore } from "./store"

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
        <WorkCard id={id} gradient="bg-gradient-to-br from-blue-500 to-green-500">
            <span>Upload your footage</span>
        </WorkCard>
    )
}

export const Tell = ({id}:CardProps)=>{
    return(
        <WorkCard id={id} gradient="bg-gradient-to-br from-yellow-500 to-orange-500">
            <span>Tell us what you want</span>
        </WorkCard>
    )
}

export const Review = ({id}:CardProps)=>{
    return(
        <WorkCard id={id} gradient="bg-gradient-to-br from-red-500 to-purple-500">
            <span>Review your video– as fast as next day</span>
        </WorkCard>
    )
}

export const Changes = ({id}:CardProps)=>{
    return(
        <WorkCard id={id} gradient="bg-gradient-to-br from-pink-500 to-red-500">
            <span>Need changes? Let’s make it how you want it!</span>
        </WorkCard>
    )
}

export const Happy = ({id}:CardProps)=>{
    return(
        <WorkCard id={id} gradient="bg-gradient-to-br from-teal-500 to-blue-500">
            <span>When you’re happy, let’s start another!</span>
        </WorkCard>
    )
}
