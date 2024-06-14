import { AboutSection } from "@/components/AboutSection"




const About = () => {
  return (
    <main className="w-full  bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] relative    pt-28">
     
        <h1 className="text-center text-4xl py-10 sm:text-5xl text-transparent bg-gradient-to-b
         from-slate-500 to-white bg-clip-text font-bold ">The Vibrant Journey of <span className="text-yellow-500">GHA Media</span></h1>

         <AboutSection/>
         <section className=" h-screen">

         </section>
    </main>
  )
}

export default About