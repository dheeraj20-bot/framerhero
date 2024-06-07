import { ArrowBigLeft, ArrowLeft, ArrowRight } from 'lucide-react';
import { useSwiperSlide } from 'swiper/react';

import { useSwiper } from 'swiper/react';

export  function SwiperButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slideNext()}  className="relative cursor-pointer px-2 py-2 
          rounded-full bg-neutral-950 font-medium text-neutral-200">
         <ArrowRight/>
   </button>
  );
}
export  function PrevSwiperButton() {
  const swiper = useSwiper();

  return (
   
        <button   onClick={() => swiper.slidePrev()}  className=" relative cursor-pointer px-2 py-2 
          rounded-full bg-neutral-950 font-medium text-neutral-200">
            <ArrowLeft className='cursor-pointer'/>
        </button>
    
    
  );
}

