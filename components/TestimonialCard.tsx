import Image from "next/image";
import  { PrevSwiperButton, SwiperButton } from "./SwiperButton";

interface TestimonialCardProps {
    quote: string;
    name: string;
    title: string;
    className?: string;
    index: number;
    image: string;
  }
  


export const TestimonialCard = ({ quote, name, title, className,image,index }: TestimonialCardProps) => {
    return (
      <div className={`  max-w-3xl w-full mx-auto
       rounded-3xl  flex flex-col gap-4  `}>
            <div className=" text-left px-4 py-2">
            <p className={`text-xl sm:text-4xl text-white ` }> {quote}</p>
            </div>

          <section className="flex items-center justify-center  space-x-8">
        <Image
          src={image}
          alt="profile-img"
          width={40}
          height={40}
          className="rounded-full  h-14 w-14 object-cover mt-2"
        />
        <div className="flex flex-col  items-start text-lg">
          <p>{name}</p>
          <p>{title}</p>
        </div>
      </section>
       
      <div className="flex w-full items-center justify-center gap-14 ">
      
      </div>
        </div>       
       
    );
  };

  
