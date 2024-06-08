import { FaLocationArrow } from "react-icons/fa"
import MagicButton from "./ui/MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { ContainerScroll } from "./ui/container-scroll-animation"

export const Hero = () => {
  return (
    <div className=" sm:max-w-7xl  py-3 sm:py-40 overflow-hidden w-full flex flex-col items-center justify-center mx-auto ">
        {/* <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="yellow"/>
            <Spotlight className="top-10 left-full  h-[80vh] w-[50vw]" fill="white"/>
        </div> */}
        <div className="h-screen w-full bg-black-100 top-0 left-0
         dark:bg-grid-white/[0.04] bg-grid-black/[0.2] absolute  flex items-center justify-center">
      <div className="absolute pointer-events-none
       inset-0 flex items-center justify-center bg-black
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
     <div className=" flex justify-center relative  z-10">
      <ContainerScroll  titleComponent={
          <>
            <div className=" max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] mx-auto flex flex-col items-center justify-center">
            <button className="bg-zinc-950 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
    <span>
    Creativity, Strategy, Results
    </span>
    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button>
             
               <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-wide leading-tight font-bold text-center  text-white  my-6">Your Vision Our Edit  <span className=" text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-400 ">Seamless Experience</span></h1>
              <p className="text-center md:tracking-wider text-gray-400 mb-4 text-sm md:text-lg lg:text-2xl">
              On-Demand Video Editing Support for Small Businesses and Content Creator</p>
              <a href="#about">
                <MagicButton title="Book a Call" icon={<FaLocationArrow/>}
                position="right"
                />
              </a>
        </div>
          </>
        }>
      <video autoPlay loop className="w-full h-full   shadow-2xl shadow-yellow-600 rounded-3xl" muted  width="320" height="240"  preload="none">
      <source  src="https://cdn.sanity.io/files/cylap7my/production/54697a65a959f6788fe314ac1f5af860c8080b44.webm" type="video/mp4" />
    </video>
      </ContainerScroll>
     </div>
    </div>
  )
}

