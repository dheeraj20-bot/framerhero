import React from "react";
import { benefits } from "@/data";
import BenefitCard from "./BenefitCard";

export function Benefits() {
  return (

    <div className="max-w-7xl px-3 relative sm:px-6 lg:px-8 py-20 mx-auto">
      <h2 className="text-5xl font-bold text-center mb-16">Benefits of <span className="text-yellow-500">GHA Media</span> </h2>
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 ">
         {
            benefits.map((benefit)=>(
               <BenefitCard key={benefit.id}  id={benefit.id} title={benefit.title} descr={benefit.descr}/>
            ))
         }



   </div>
          
    </div>
    
  );
}
