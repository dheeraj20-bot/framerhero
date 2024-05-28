import { testimonials } from "@/data"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"


export const Testimonials = () => {
  return (
    <div className="h-[50rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.03]  items-center  relative overflow-hidden">
         <div>
           <h2 className="text-3xl sm:text-4xl font-semibold  py-20">What Our  <span className="text-purple">Clients Say</span></h2>
         </div>

      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  )
}

