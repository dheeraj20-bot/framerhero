import { FaLocationArrow } from "react-icons/fa"
import MagicButton from "./ui/MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { ContainerScroll } from "./ui/container-scroll-animation"

export const Hero = () => {
  return (
    <div className=" sm:max-w-7xl  py-3 sm:py-40 overflow-hidden w-full flex flex-col items-center justify-center mx-auto ">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="yellow"/>
            <Spotlight className="top-10 left-full  h-[80vh] w-[50vw]" fill="white"/>
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white top-0 left-0
         dark:bg-grid-white/[0.1] bg-grid-black/[0.2] absolute  flex items-center justify-center">
      <div className="absolute pointer-events-none
       inset-0 flex items-center justify-center dark:bg-black
        bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
     <div className=" flex justify-center relative  z-10">
      <ContainerScroll  titleComponent={
          <>
            <div className=" max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] mx-auto flex flex-col items-center justify-center">
              <h2 className=" uppercase tracking-widest  text-xs 
              text-center text-blue-100  bg-neutral-800/60  backdrop-blur-md sticky px-2 rounded-lg py-2 max-w-80">Creativity, Strategy, Results</h2>
               <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-wide leading-tight font-bold text-center  text-white  my-6">Your Vision Our Edit  <span className=" text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-400 ">Seamless Experience</span></h1>
              <p className="text-center md:tracking-wider text-gray-400 mb-4 text-sm md:text-lg lg:text-2xl">
              On-Demand Video Editing Support for Growing Businesses</p>
              <a href="#about">
                <MagicButton title="Book a Call" icon={<FaLocationArrow/>}
                position="right"
                />
              </a>
        </div>
          </>
        }>
      <video autoPlay loop className="w-full h-full   shadow-2xl shadow-yellow-600 rounded-3xl" muted  width="320" height="240"  preload="none">
      <source  src="video.mp4" type="video/mp4" />
    </video>
      </ContainerScroll>
     </div>
    </div>
  )
}

