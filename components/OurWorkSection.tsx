import React from 'react'
import OurWork from './OurWork'
import { FadeUpStagger } from './FadeupText'
import Link from 'next/link'

const OurWorkSection = () => {
  return (
    <main className='max-w-7xl  flex flex-col items-center mx-auto px-4  py-32'>
      <div className=' text-center'>
     <FadeUpStagger/>
      </div>
       
        <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">

          <OurWork/>
          <OurWork/>
          <OurWork/>
          <OurWork/>
          <OurWork/>
          <OurWork/>
        </div>
       
        <Link href="/our-work" className="relative mt-10 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-zinc-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
   Explore More
  </span>
</Link>
        
    </main>
   
  )
}

export default OurWorkSection