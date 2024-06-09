import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { faqs } from "@/data"
  
  export function FaqSection() {
    return (
      <main className=" py-20 px-3 lg:px-10 mx-auto">
        <h2 className=" text-4xl mb-5 text-center  sm:text-6xl font-semibold">Frequently asked <span className="text-yellow-500">questions</span></h2>
         <p className="text-center bg-clip-text font-bold text-transparent bg-gradient-to-b  from-slate-500 to-white text-sm sm:text-lg">Need help with something? Here are some of the most common questions we get.         </p>
        <Accordion type="single" collapsible className=" max-w-3xl mx-auto mt-10">

          {
          faqs.map((faq)=>(
            <div key={faq.question}>
               <AccordionItem value={faq.question}>
            <AccordionTrigger className="">{faq.question}</AccordionTrigger>
            <AccordionContent className=" text-slate-300">
            We leverage Adobe Creative tools, including After Effects, Premiere Pro, Photoshop, Illustrator, and Audition, for our video projects.
            </AccordionContent>
          </AccordionItem>
            </div>
          ))
          }
      </Accordion>
      </main>
      
    )
  }
  