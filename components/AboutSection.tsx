"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import { motion } from "framer-motion";
import { Aboutus } from "@/data";

export function AboutSection() {
  return (
    <TracingBeam className="px-6 overflow-hidden ">
      <div className="max-w-5xl mx-auto   antialiased pt-4 relative">
        {Aboutus.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            {
              item.badge && (  <motion.h2 whileTap={{ scale: 0.8 }} className="bg-zinc-950 border-b-yellow-500 border-b cursor-pointer text-white rounded-full text-sm w-fit px-5 py-3 mb-4">
                 {item.badge}
              </motion.h2>)
            }
           
            <p className={twMerge( "text-2xl font-semibold bg-gradient-to-b from-gray-400 to-white bg-clip-text text-transparent mb-4")}>
              {item?.title}
            </p>

            <div className="text-sm   prose-sm dark:prose-invert">
              
              {item?.image && (
                <div className="overflow-hidden shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]  relative  mb-10 rounded-xl">
                  
                  <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className=" w-full  h-full hover:scale-105 duration-300 transition-all   object-center object-contain "
                />
                </div>
                
              )}
              {
                item?.description?.map((list)=>(
                    <ul key={list} className=" ml-5 text-slate-300 list-disc  leading-loose text-sm sm:text-xl">
                        <li>{list}</li>
                    </ul>
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}


