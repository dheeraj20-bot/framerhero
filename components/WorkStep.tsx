import { features } from "@/data"
import { WorkTitle } from "./ourwork/title"
import Image from "next/image"

export const WorkStep = () => {
  return (
    <div className="px-4 max-w-6xl mx-auto  ">

        <h2 className=" text-center py-5 sm:py-10 -mb-48 sm:mb-0 font-semibold text-3xl sm:text-6xl">How GHAMEDIA <span className="text-yellow-500">Works</span></h2>

        <div className="flex w-full gap-5 sm:gap-20 items-start ">
              <div className="w-full sm:py-[50vh] py-[30vh]">
                <ul className="flex flex-col space-y-10 px-2 sm:px-0 ">
                    {features.map((feature, index) => (
                       <li className=" border-b-teal-500  border-b py-2 sm:border-none" key={index}>
                        <WorkTitle id={feature.id}> <h2 className="sm:text-5xl  text-3xl font-semibold">{feature.title}</h2>
                        <span className="text-lg block mt-5 sm:mt-10">{feature.description}</span>
                         </WorkTitle>
                         <Image
                         src="/Bestie.png"
                         width={100}
                         height={100}
                         className="block sm:hidden w-full  h-full object-cover "
                         alt="Bestie.png"
                         />
                       </li>
                    ))}
                </ul>
              </div>

              <div className="w-full sticky hidden top-0 h-screen sm:flex items-center">
                <div className=" relative  w-full  rounded-2xl  aspect-square  bg-yellow-500 ">
                   {features.map((feature) => (
                      <feature.card id={feature.id} key={feature.id} />
                   ))}
                </div>
              </div>
        </div>
      
    </div>
  )
}

