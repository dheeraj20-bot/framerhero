import { FadeUpStagger } from "@/components/FadeupText"
import OurWork from "@/components/OurWork"

const Work = () => {
  return (
    <section className=" py-28 ">
         <div className="">
          <FadeUpStagger/>
         </div>
           
           <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-bold sticky ">2-D <span className="text-yellow-500">Animation</span></h2>
          
         <div className="grid grid-cols-1  px-4  md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">

            <OurWork/>
            <OurWork/>
            <OurWork/>
            <OurWork/>
            <OurWork/>
            <OurWork/>
            <OurWork/>
            <OurWork/>
            <OurWork/>
            <OurWork/>

         </div>
         </div>
          
        
          
    </section>
  )
}

export default Work