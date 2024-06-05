import Image from "next/image";

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
      <div className={` bg-zinc-950 shadow-[-5px_-5px_10px_0px_rgba(0,0,0,0.1),_5px_5px_10px_4px_rgba(255,255,255,0.15)]  p-6  hover:translate-y-[-10px] duration-300 transition-all  
       rounded-3xl h-fit flex flex-col gap-4  ${className}`}>

  
            <div className=" text-center px- py-2">
            <p className={`text-lg ${index  === 1 ? 'text-white  font-medium' : 'text-gray-400  font-normal'} ` }> {quote}</p>
            </div>

          <section className={`${
            index === 1 ? "border-t-2 py-2 border-t-yellow-500 border-opacity-50 justify-between" : " justify-center"
          } flex items-center  gap-4`}>
        <Image
          src={image}
          alt="profile-img"
          width={40}
          height={40}
          className="rounded-full  h-14 w-14 object-cover mt-2"
        />
        <div>
          <div className="text-lg   opacity-70 leading-relaxed font-semibold">{name}</div>
          <div className="text-xs  text-slate-100  opacity-70 leading-relaxed font-semibold">{title}</div>
        </div>
      </section>
 
        </div>       
       
    );
  };

  
