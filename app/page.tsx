import { BookaCall } from "@/components/BookaCall";
import { Clients } from "@/components/Clients";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 
    overflow-hidden "> 
          <FloatingNav navItems={[ {name: "Home", link: "/",icon:<FaHome/>},{name: "About", link: "/about"},{name: "Blogs", link: "/blogs"}]}/>
          <Hero/>
          <Clients/>   
          <Testimonials/>  
    </main>
  );
}
