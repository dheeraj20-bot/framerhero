import { clientImages } from "@/data"
import Image from "next/image"


export const Clients = () => {
  return (
    <>
        <div>
          <h2 className=" text-5xl font-normal mb-16 text-center">Companies we&apos;ve <span className="text-yellow-500">edited for</span></h2>
        </div>
        <div className="grid  max-w-7xl mx-auto  grid-cols-3 md:grid-cols-4   lg:grid-cols-6  gap-4 ">
            {
              clientImages.map((image,index) =>(
                <div  key={index} className="flex justify-center hover:-translate-y-3 transition-all duration-300 overflow-hidden rounded-md items-center">
                  <Image
                  src={image.url}
                  alt={image.name}
                  width={100}
                  height={100}
                  className=" relative w-34 h-34 object-cover
                   transition-all duration-300"
                  />
                </div>
              ))
            }
        </div>
       
    </ >
  )
}

