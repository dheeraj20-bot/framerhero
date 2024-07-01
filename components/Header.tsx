import { navItems } from "@/data"
import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <div className="text-center py-5 border-b border-gray-600  fixed   flex  justify-between items-center px-2 sm:px-20 w-full z-50 backdrop-blur-2xl text-white">
        <Link href="/">
            <Image
            src="/logo.png"
            width={125}
            height={60} 
            alt="Gha Media logo"
            />
        </Link>

        <nav className="hidden sm:flex space-x-8">
          {
            navItems.map((item)=>(
              <Link key={item.name} className=" font-semibold text-lg hover:text-yellow-500 duration-100 transition-all" href={item.url}>
                {item.name}
              </Link>
            ))
          }
        </nav>

        <Link href="/login" >
        <button className="border  text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-6 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute -bottom-1 inset-x-0 w-1/2 mx-auto  bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button>
        </Link>

    </div>
  )
}

