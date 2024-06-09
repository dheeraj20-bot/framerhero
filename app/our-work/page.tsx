import { FadeUpStagger } from "@/components/FadeupText"
import OurWork from "@/components/OurWork"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { client } from "@/sanity/lib/client"
import { GetStaticProps } from "next"
import { groq } from "next-sanity"



export const revalidate = 60

const workdata = async()=>{
  const query = groq`*[_type=="work"] | order(_createdAt desc){
   "videoUrl": video.asset->url,
     title,
    categories
  }`
  return client.fetch(query)
}


const Work = async () => {
  const categories = ['Promotional', 'Corporate', 'Social', 'Youtube', 'Event']

  const data:Work[] = await workdata()

  const worksByCategory = categories.reduce((acc, category) => {
    acc[category] = data.filter(work => work.categories === category)
    return acc
  }, {} as Record<string, Work[]>)
  console.log(worksByCategory);

  const navItems = [
    {
      name: "Promotional",
      link: "#Promotional",

    },
    {
      name: "Corporate",
      link: "#Corporate",
        },
    {
      name: "Social",
      link: "#Social",
    },
  ];
  
  
  return (
    <section className=" w-full  relative min-h-screen py-28 ">
      <div className="absolute  top-10 h-[90rem] w-full
       bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"/>
          
          <FloatingNav  navItems={navItems}/>
          <FadeUpStagger/>

           <div className="max-w-7xl  mx-auto py-10 px-4 sm:px-6 lg:px-8">

          
         <div className="">

         {categories.map(category => (
        <section id={category} className="relative mt-10 max-w-7xl" key={category}>

          <h2 className=" text-3xl sm:text-5xl font-bold sticky ">{category}</h2>

      <div className="grid grid-cols-1  px-4  md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
            {worksByCategory[category].map(work => (
              <div key={work.title}>
                <video controls>
                  <source src={work.videoUrl}  />
                </video>
              </div>
            ))}
          </div>
        </section>
      ))}
         </div>
         </div>
          
        
          
    </section>
  )
}

export default Work