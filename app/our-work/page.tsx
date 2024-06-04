import OurWork from "@/components/OurWork"

const Work = () => {
  return (
    <section className=" py-28 ">
         <div className="text-center">
          <h1 className="text-5xl font-bold pt-10">Our Work</h1>
          <p className="mt-6 text-lg  text-gray-300">We have edited 6,500+ videos for our clients</p>
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