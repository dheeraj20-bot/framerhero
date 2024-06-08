'use client'

import { testimonials } from "@/data"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination,Thumbs,Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { PrevSwiperButton, SwiperButton } from "./SwiperButton";
import Image from "next/image";

export const Testimonials = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <main className=" relative py-40">
            <div className="absolute top-10 h-[90rem]  backdrop-blur-lg blur-lg  rounded-3xl w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

     <div className=""></div>
        <div>
        <h2 className=" text-4xl relative  sm:text-6xl  font-normal mb-16 text-center">What <span className="text-yellow-500">our Clients</span> say</h2>

        </div>
     
             
      <Swiper
      autoplay
        pagination={{
          type: 'fraction',
          el:".swiper-pagination",
          renderCustom: function (swiper, current, total) {
            return '0' + current + '/' + '0' + total; 
      }
        }}
        
        modules={[Navigation,Pagination,Thumbs]}
        className="  w-full rounded-lg"
        thumbs={{ swiper: thumbsSwiper }}
      >

       
        {
                  testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className=" text-center text-4xl ">
                    <div className={`  max-w-3xl w-full mx-auto
                         rounded-3xl  flex flex-col gap-4 mb- `}>
                       <div className=" text-left sm:text-center px-4 py-2 mb-10">
                        <p className={`text-xl sm:text-3xl text-white ` }>"{" "}{ testimonial.quote}{" "}"</p>
                            </div>
           
           <div className="w-full flex flex-wrap  px-2 justify-start sm:justify-center gap-10">

           
            <div className="flex gap-2 items-center">
                    <Image
                     src="/engagements.webp"
                    alt="profile-img"
                    width={40}
                    height={40}
                    className="rounded-full bg-gradient-to-r from-slate-800 to-zinc-950 p-2 shadow-lg hover:scale-105 duration-200 transition-all  object-cover mt-2"
                     />
                      <div className="flex flex-col items-start space-y-1"> 
                     <p className=" text-base">Engagement</p>
                     <span className="text-2xl font-medium">44k+</span>
                     </div>
            </div>

            <div className="flex gap-2  items-start sm:items-center">
                    <Image
                     src="/new customers.webp"
                    alt="profile-img"
                    width={40}
                    height={40}
                    className="rounded-full  bg-gradient-to-r from-slate-800 to-zinc-950 p-2 shadow-lg hover:scale-105 duration-200 transition-all object-cover mt-2"
                     />
                      <div className="flex flex-col items-start space-y-1"> 
                     <p className=" text-base">New Customers</p>
                     <span className="text-2xl font-medium">44k+</span>
                     </div>
            </div>
             
            <div className="flex gap-2 items-center">
                    <Image
                    src="/revenuegenerated.webp"
                    alt="profile-img"
                    width={40}
                    height={40}
                    className="rounded-full bg-gradient-to-r from-slate-800 to-zinc-950 p-2 shadow-lg hover:scale-105 duration-200 transition-all  object-cover mt-2"
                     />
                     <div className="flex flex-col items-start space-y-1"> 
                     <p className=" text-base">Revenue Generated</p>
                     <span className="text-xl sm:text-2xlfont-medium">$44k+</span>
                     </div>
                     
            </div>
          
           </div>
              
          <section className="flex items-center px-3 justify-start sm:justify-center  space-x-8">
                  <Image
                    src={testimonial.image}
                    alt="profile-img"
                    width={60}
                    height={60}
                    className=" rounded-full object-cover mt-2"
                     />
            <div className="flex flex-col  items-start text-lg">
          <p>{testimonial.name}</p>
             <p className="text-slate-400">{testimonial.title}</p>
        </div>

             </section>
             <div className=" w-full  flex justify-center gap-10">
            <PrevSwiperButton/>
            <div className="swiper-pagination  text-sm"></div>
            <SwiperButton/>
          </div>
        </div> 
                     </SwiperSlide>
                  ))
            }  
      </Swiper>

      </main>
  )
}

