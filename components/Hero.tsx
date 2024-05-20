import { FaLocationArrow } from "react-icons/fa"
import MagicButton from "./ui/MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import { ContainerScroll } from "./ui/container-scroll-animation"

export const Hero = () => {
  return (
    <div className="pb-20 ">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="yellow"/>
            <Spotlight className="top-10 left-full  h-[80vh] w-[50vw]" fill="white"/>
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="orange"/>
        </div>
        <div className="h-screen w-full dark:bg-black-100 bg-white top-0 left-0
         dark:bg-grid-white/[0.1] bg-grid-black/[0.2] absolute  flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none
       inset-0 flex items-center justify-center dark:bg-black-100
        bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
     <div className=" flex justify-center relative  z-10">
      <ContainerScroll  titleComponent={
          <>
            <div className=" max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] mx-auto flex flex-col items-center justify-center">
              <h2 className=" uppercase tracking-widest  text-xs 
              text-center text-blue-100  bg-neutral-800/60  backdrop-blur-md sticky px-2 rounded-lg py-2 max-w-80">Dynamic Web Magic With Nextjs </h2>
              <TextGenerateEffect words="Your Vision Our Edit Seamless Experience" 
              className=" text-center text-3xl md:text-5xl lg:text-6xl"/>
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
      <video autoPlay loop  className="w-full h-full   shadow-2xl shadow-yellow-600 rounded-3xl" muted  width="320" height="240"  preload="none">
      <source  src="video.mp4" type="video/mp4" />
    </video>
      </ContainerScroll>
        

     </div>
    </div>
  )
}

