
interface TestimonialCardProps {
    quote: string;
    name: string;
    title: string;
    className?: string;
    index: number;
  }
  


export const TestimonialCard = ({ quote, name, title, className,index }: TestimonialCardProps) => {
    return (
      <div className={`group rounded-2xl  backdrop-blur-lg  border-gray-700  border ${className}`}>

        <div className="rounded-2xl w-full h-full  overflow-hidden  flex flex-col gap-6 items-center">
            <div className="p-4">
            <p className="text-lg text-center font-light">{quote}</p>
            <div className="flex flex-row gap-4 py-5 justify-center items-center">
            <img src="/Bestie.png" className="w-10 h-10 rounded-full  object-cover"/>
            <div className="flex flex-col">
            <h3 className="text-2xl mt-4">{name}</h3>
             <p className="text-sm">{title}</p>
            </div>
             </div>
            </div>
             
           
             
          {index ===2 && <img src="/Bestie.png" className="w-full h-full   object-cover"/>}
        </div>
        <div
        className= "h-24 w-24 rounded-full -bottom-2 bg-yellow-500 blur-3xl absolute"
        />
       
        </div>
    );
  };

  
