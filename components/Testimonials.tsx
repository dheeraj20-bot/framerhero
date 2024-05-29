import { testimonials } from "@/data"
import { TestimonialCard } from "./TestimonialCard"


export const Testimonials = () => {
  return (
      <div className="px-6 overflow-hidden py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-10">
          <h2 className="text-5xl sm:font-semibold mb-14 max-w-2xl text-center mx-auto leading-normal">What People <span className="text-yellow-500">Say</span></h2>
           <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 ">
            {
                  testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index}
                    index={index}
                    quote={testimonial.quote} 
                    name={testimonial.name}
                    title={testimonial.title}
                    className={index===2?"row-span-2":index===3?"row-span-2":index===5?"col-span-2":""}
                    />

                  ))
            }

           </div>
      </div>
  )
}

