import { pricingPlans } from "@/data"
import { CheckCheckIcon, CheckCircle, CheckIcon, TicketIcon } from "lucide-react"

const PricingSection = () => {
  return (
    <main className="max-w-[90rem] bg-gradient-to-r from-gray-800 to-black rounded-3xl mt-20 py-20 mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className=" text-4xl sm:text-5xl font-bold  mb-16  max-w-3xl  leading-tight  text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 ">
           Find the perfect plan for every size business.
           </h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-7 ">
    
     {
      pricingPlans.map((plan)=>(
          <div key={plan.title} className=" bg-gray-950 even:-mt-3    hover:scale-105 duration-300 transition-all ease-in-out last:bg-gradient-to-r last:from-orange-500 last:to-yellow-500 rounded-3xl h-[35rem]   border-gray-200 p-4">
                 <div>
                    <h2 className="text-2xl font-bold text-slate-300">{plan.title}</h2>
                    <span className="text-4xl font-bold text-white"> {plan.price}</span>
                 </div>

                 <div>
                   <button className="mt-4 bg-white text-black font-semibold rounded-3xl px-5 py-3">
                      Get Started
                   </button>
                 </div>

                 <div className="mt-4">
                  {
                      plan.features.map((item)=>(
                          <ul key={item} className="flex items-center gap-3">
                              
                              <CheckIcon className="w-4 h-4"/>
                              <li className="py-2 text-white">{item}</li>
                          </ul>
                      ))
                  }
                 </div>

          </div>
      ))
     }

  </div>
    </main>
    
  )
}

export default PricingSection