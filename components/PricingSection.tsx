import { pricingPlans } from "@/data"
import { CheckCircle, TicketIcon } from "lucide-react"

const PricingSection = () => {
  return (
    <main className="max-w-7xl py-20 mx-auto">
           <h2 className="text-5xl font-bold mb-10 text-white text-center">Pricing</h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-7 px-4 sm:px-6 lg:px-8">
    
     {
      pricingPlans.map((plan)=>(
          <div key={plan.title} className=" bg-zinc-950  last:shadow-[0_10px_50px_rgba(255,255,255,_0.6)] hover:scale-105 duration-300 transition-all ease-in-out last:bg-gradient-to-r last:from-zinc-950 last:to-tealf-500 rounded-3xl h-[35rem]   border-gray-200 p-4">
                 <div>
                    <h2 className="text-2xl font-bold mb-4 text-slate-300">{plan.title}</h2>
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
                              <CheckCircle className="w-6 h-6 text-white" />
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