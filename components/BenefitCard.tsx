import React from 'react'
import { Meteors } from './ui/meteors'

type Props ={
    title:string
    descr:string
    id:number
}

const BenefitCard = ({title,descr,id}:Props) => {
  return (
    <div className={`${id===7? ' md:col-span-3' : 'col-span-1'} z-10 w-full relative `}>
           
        <div className="relative 
          
        bg-zinc-950  px-4 py-8 h-full  hover:translate-y-[-10px] transition-all duration-300 overflow-hidden rounded-2xl flex flex-col space-y-2 items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 ">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-hourglass-high"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6.5 7h11" /><path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" /><path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" /></svg>
          </div>
            <div className='flex flex-col '>
            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            {title}
          </h1>
          <p className="font-normal text-base text-slate-400 mb-4 relative z-50">
            {descr}
          </p>

            </div>
         


            {
                id===7 &&
                <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                Explore
              </button>
            }
         

          <Meteors number={5} />
        </div>
      </div>
  )
}

export default BenefitCard