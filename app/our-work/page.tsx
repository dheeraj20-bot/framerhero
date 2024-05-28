import OurWork from "@/components/OurWork"

const Work = () => {
  return (
    <main className=" bg-black-100 min-h-screen">
         <div className="text-center">
          <h1 className="text-4xl font-bold pt-10">Our Work</h1>
          <p className="mt-6">We have edited 6,500+ videos for our clients</p>
         </div>
           
         <div>
          <OurWork/>
         </div>
          
    </main>
  )
}

export default Work