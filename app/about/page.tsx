import { AboutSection } from "@/components/AboutSection"




const About = () => {
  return (
    <main className="py-20">
            <div className="absolute top-10  h-[90rem] w-full  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        <h1 className="text-center py-10 text-5xl text-transparent bg-gradient-to-b
         from-slate-500 to-white bg-clip-text font-bold ">The Vibrant Journey of <span className="text-yellow-500">GHA Media</span></h1>

         <AboutSection/>
    </main>
  )
}

export default About