import { testimonials } from "@/data"
import { TestimonialCard } from "./TestimonialCard"


export const Testimonials = () => {
  return (
    <main className=" py-20">

        <div>
        <h2 className=" text-4xl sm:text-5xl font-bold mb-16 text-center">What People Say {""}<span className="text-yellow-500">About Us</span></h2>

        </div>
      <div className="flex justify-center items-center max-w-7xl mx-auto min-h-screen p-8 ">

        
           <div className="grid gap-6 grid-cols-1 lg:grid-cols-4 ">
            {
                  testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index}
                    index={index}
                    quote={testimonial.quote} 
                    name={testimonial.name}
                    title={testimonial.title}
                    image={testimonial.image}
                    className={index===1  ? "md:col-span-2" : index===3?"md:row-span-2":index===4 || index===5?"md:-mt-14":""}
                    />

                  ))
            }

           </div>
      </div>
      </main>
  )
}

