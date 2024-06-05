import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { faqs } from "@/data"
  
  export function FaqSection() {
    return (
      <main className=" max-w-5xl py-20 mx-auto">
        <h2 className="text-5xl font-semibold">Frequently asked questions</h2>
        <Accordion type="single" collapsible className=" mx-auto mt-10">

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
  