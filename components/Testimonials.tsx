'use client'

import { testimonials } from "@/data"
import { TestimonialCard } from "./TestimonialCard"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination,Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { PrevSwiperButton, SwiperButton } from "./SwiperButton";

export const Testimonials = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <main className=" py-20">
     <div className=""></div>
        <div>
        <h2 className=" text-4xl sm:text-6xl  font-normal mb-16 text-center">What <span className="text-yellow-500">our Clients</span> say</h2>

        </div>
     
             
      <Swiper
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
                    <TestimonialCard 
                    index={index}
                    quote={testimonial.quote} 
                    name={testimonial.name}
                    title={testimonial.title}
                    image={testimonial.image}
                    />
                     </SwiperSlide>
                  ))
            }  
            <div className=" w-full flex justify-center gap-4">
            <PrevSwiperButton/>
      <div className="swiper-pagination text-sm"></div>
      <SwiperButton/>
            </div>
           
      </Swiper>

      
         
    
      </main>
  )
}

