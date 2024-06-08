import React from "react";
import { benefits } from "@/data";
import BenefitCard from "./BenefitCard";

export function Benefits() {
  return (

    <div className=" px-3  bg-neutral-950  rounded-3xl
    bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] 
     rounded-b-3xl antialiased relative sm:px-6 lg:px-8 py-20 mx-auto">

    <div className="mb-16  text-center">
      <h2 className=" text-4xl mb-4 sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-gray-400 to-white font-bold text-center">Benefits of <span className="text-yellow-500">GHA Media</span> </h2>
       <p className="text-xl text-slate-300">An on-demand team at your fingertips.</p>
         </div>
     
        <div className="grid  max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 ">
         {
            benefits.map((benefit)=>(
               <BenefitCard key={benefit.id}  id={benefit.id} image={benefit.image} title={benefit.title} descr={benefit.descr}/>
            ))
         }



   </div>
          
    </div>
    
  );
}
