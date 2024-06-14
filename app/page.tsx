import { Benefits } from "@/components/Benefits";
import  {BentoGridSection}  from "@/components/BentoGridSection";
import { BookaCall } from "@/components/BookaCall";
import { Clients } from "@/components/Clients";
import { FaqSection } from "@/components/FaqSection";
import { Hero } from "@/components/Hero";
import OurWorkSection from "@/components/OurWorkSection";
import PricingSection from "@/components/PricingSection";
import { Testimonials } from "@/components/Testimonials";
import { WorkStep } from "@/components/WorkStep";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  return (
    <main className="relative bg-black  overflow-clip
      "> 
          <Hero/>
          <Clients/>   
          {/* <BentoGridSection/>  */}
          <Testimonials/>
          <OurWorkSection/>
          <WorkStep/>
          <Benefits/>
          <BookaCall/>
         
          <PricingSection/>
          <FaqSection/>
    </main>
  );
}
