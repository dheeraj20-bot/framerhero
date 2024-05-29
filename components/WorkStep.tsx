import { features } from "@/data"
import { WorkTitle } from "./ourwork/title"

export const WorkStep = () => {
  return (
    <div className="px-4 max-w-6xl mx-auto  ">

        <div className="flex w-full gap-5 sm:gap-20 items-start ">
              <div className="w-full py-[50vh]">
                <ul>
                    {features.map((feature, index) => (
                       <li key={index}>
                        <WorkTitle id={feature.id}> {feature.title} </WorkTitle>
                       </li>
                    ))}
                </ul>
              </div>
              <div className="w-full sticky top-0 h-screen flex items-center">
                <div className=" relative  w-full  rounded-2xl  aspect-square  bg-yellow-500 ">
                   {features.map((feature) => (
                      <feature.card id={feature.id} key={feature.id} />
                   ))}
                </div>
              </div>
        </div>
         <div className="h-screen">
            More room to scroll
         </div>
    </div>
  )
}

