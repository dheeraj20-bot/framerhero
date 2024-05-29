'use client'

import { useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import { useWorkStore } from "./store"

type Props = {
  children: React.ReactNode
  id: string
}


export const WorkTitle = ({children,id}: Props) => {
    const ref = useRef<HTMLParagraphElement>(null)
    const isInView =useInView(ref,{margin:"-50% 0px -50% 0px"})
    const setInViewFeature = useWorkStore(state =>state.setInViewFeature)
    const InViewFeature = useWorkStore(state =>state.inViewFeature)


    useEffect(() => {
        if (isInView) setInViewFeature(id)
        if(!isInView && InViewFeature === id) setInViewFeature(null)
       
        
      }, [isInView,id,setInViewFeature,InViewFeature])

    
    
  return (
    <p ref= {ref} className={`${isInView ? "text-white text-2xl" : " text-neutral-600 text-xl"}  sm:text-5xl transition-colors py-16 `}>{children}</p>
  )
}
