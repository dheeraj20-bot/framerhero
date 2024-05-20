import { Hero } from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative sm:px-10 px-5 py-2 sm:py-20  bg-black-100 flex  
    justify-center items-center flex-col  
    overflow-hidden mx-auto">
        <div className=" max-w-7xl w-full">
          <FloatingNav navItems={[ {name: "Home", link: "/",icon:<FaHome/>}]}/>
         <Hero/>
        </div>
    </main>
  );
}
