import React from 'react'
import { Meteors } from './ui/meteors'
import Image from 'next/image'

type Props ={
    title:string
    descr:string
    id:number
    image:string
}

const BenefitCard = ({title,descr,id,image}:Props) => {
  return (
    <div className={`${id===7? ' md:col-span-3' : 'col-span-1'} z-10 w-full relative `}>

     
           
        <div className="relative 
        bg-gradient-to-b
            px-4 py-8 h-full transition-all duration-300 overflow-hidden rounded-2xl flex flex-col space-y-2 items-start">

          <div className="h-10 w-10 rounded-full   flex items-center justify-center mb-4 ">
            <Image
            src={image}
            alt={title}
            width={40}
            height={40}
            className=''
            />

          </div>
            <div className='flex flex-col '>
            <h1 className="font-semibold text-xl text-white mb-4 relative z-50">
            {title}
          </h1>
          <p className="font-normal text-base text-slate-00/90 mb-4 relative z-50">
            {descr}
          </p>

            </div>
         


            {
                id===7 &&
                <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                Explore
              </button>
            }
         

         <Meteors number={20}/>
        </div>
      </div>
  )
}

export default BenefitCard