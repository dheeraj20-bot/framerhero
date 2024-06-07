import { features } from "@/data"
import { WorkTitle } from "./ourwork/title"
import Image from "next/image"
import { Meteors } from "./ui/meteors"

export const WorkStep = () => {
  return (
    <div className=" relative   bg-zinc-950    pt-40  ">

   <div className=" max-w-7xl mx-auto rounded-3xl px-5  ">
       
              <div className="-mb-48 max-w-2xl mx-auto sm:mb-0">

            <h2 className=" text-center  text-transparent 
               bg-clip-text  bg-gradient-to-b  from-white to-gray-400 
             sm:mb-5 font-semibold text-4xl sm:text-6xl">Our Creative  <span className="text-yellow-500">Process</span></h2>
    <p className="text-lg text-slate-300  text-center">Discover how we turn your vision into reality through a seamless 
     and innovative process that ensures excellence at every step.</p>
              </div>

     <div className="flex z-10 w-full gap-5 sm:gap-20 items-start ">

       <div className="w-full sm:py-[20vh] py-[30vh]">
       
         <ul className="flex flex-col space-y-10 px-2 sm:px-0 ">
             {features.map((feature, index) => (
                <li className=" border-b-teal-500  border-b py-2 sm:border-none" key={index}>
                 <WorkTitle id={feature.id}> <h2 className="sm:text-5xl  text-3xl font-semibold">{feature.title}</h2>
                 <span className="text-lg block mt-5 sm:mt-10">{feature.description}</span>
                  </WorkTitle>
                  {
                   feature.image && ( 
                    <div className="relative">
                       <Image
                     src={feature.image}
                     width={100}
                     height={100}
                     className="block sm:hidden w-44 h-44 rounded-2xl object-contain "
                     alt="Bestie.png"
                     />
                       </div>
                     )
                  
                  
                  }
                 
                </li>
             ))}
         </ul>
       </div>

       <div className="w-full sticky hidden top-0 h-screen sm:flex items-center">
         <div className=" relative  w-full  rounded-2xl  aspect-square   ">
            {features.map((feature) => (
               <feature.card id={feature.id} key={feature.id} />
            ))}
             
         </div>
       </div>
       
       
       
       </div>
 
       </div>
       
      
      
    </div>
  )
}

