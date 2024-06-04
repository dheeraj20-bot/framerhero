import { Benefits } from "@/components/Benefits";
import { BookaCall } from "@/components/BookaCall";
import { Clients } from "@/components/Clients";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { WorkStep } from "@/components/WorkStep";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  return (
    <main className="relative bg-black  overflow-clip
      "> 
          <Hero/>
          <Clients/>    
          <Testimonials/>
          <WorkStep/>
          <Benefits/>
    </main>
  );
}
