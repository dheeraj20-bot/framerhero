import { testimonials } from "@/data"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"


export const Testimonials = () => {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black-100 dark:bg-grid-white/[0.03]  items-center justify-center relative overflow-hidden">
         <div>
           <h2 className="text-3xl font-semibold  py-20">What Our Clients Say</h2>
         </div>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  )
}

