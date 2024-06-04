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
      <div className={`  p-6  bg-black-200 hover:scale-105 duration-300 transition-all  
      border-r-4 border-b-4 border-b-yellow-500 border-r-yellow-500 rounded-lg h-fit flex flex-col gap-4  ${className}`}>

  
            <div className=" text-center px- py-2">
            <p className={`text-lg ${index  === 1 ? 'text-white  font-medium' : 'text-gray-400  font-normal'} ` }> {quote}</p>
            </div>

          <section className={`${
            index === 1 ? "border-t border-t-gray-500 border-opacity-50 justify-between" : " justify-center"
          } flex items-center  gap-4`}>
        <Image
          src={image}
          alt="profile-img"
          width={40}
          height={40}
          className="rounded-full  h-14 w-14 object-cover mt-2"
        />
        <div>
          <div className="text-xs   opacity-70 leading-relaxed font-semibold">{name}</div>
        </div>
      </section>
 
        </div>       
       
    );
  };

  
