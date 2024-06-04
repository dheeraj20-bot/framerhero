import OurWork from "@/components/OurWork"

const Work = () => {
  return (
    <section className=" py-28 min-h-screen">
         <div className="text-center">
          <h1 className="text-4xl font-bold pt-10">Our Work</h1>
          <p className="mt-6 text-sm  text-gray-300">We have edited 6,500+ videos for our clients</p>
         </div>
           
         <div className="grid grid-cols-1 max-w-7xl mx-auto  px-4 overflow-hidden md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">

            <OurWork/>
            <OurWork/>
            <OurWork/>
            <OurWork/>
            <OurWork/>
            <OurWork/>


         </div>
          
        
          
    </section>
  )
}

export default Work