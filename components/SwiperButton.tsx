import { ArrowBigLeft, ArrowLeft, ArrowRight } from 'lucide-react';
import { useSwiperSlide } from 'swiper/react';
import { Button } from "@/components/ui/button"


import { useSwiper } from 'swiper/react';

export  function SwiperButton() {
  const swiper = useSwiper();

  return (
    <button  onClick={() => swiper.slideNext()}  className="relative cursor-pointer px-3  py-2 
          rounded-full  bg-gradient-to-br from-slate-700 to-neutral-900 font-medium text-neutral-200">
         <ArrowRight  className='w-34 h-34'/>
   </button>
  );
}
export  function PrevSwiperButton() {
  const swiper = useSwiper();

  return (
   
        <button    onClick={() => swiper.slidePrev()}  className=" relative flex items-center justify-center px-3 py-2 
          rounded-full  bg-gradient-to-br from-slate-700 to-neutral-900 font-medium text-neutral-200">
            <ArrowLeft className=''/>
        </button>
    
    
  );
}

