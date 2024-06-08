'use client'
import { urlForImage } from "@/sanity/lib/image";
import { urlFor } from "@/sanity/lib/urlFor";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion"

type Props= {
    posts:Post[]
}

const BlogLists = ({posts}:Props) => {
    if(posts===null){
        return <div>Hi</div>
    }

    if(posts.length===0){
        return <div className="my-0 h-[40rem] flex justify-center items-center">
                <p className="text-3xl  bg-clip-text text-transparent font-bold bg-gradient-to-tr from-violet-400 to-blue-600">There is no post</p>
                </div>
    }
  return (
    <div className=" relative max-w-7xl mx-auto">
      
     
      <div className="grid grid-cols-1 md:grid-cols-3  gap-10 gap-y-16 pb-24">
            {
                posts.map((post)=>(
                     <Link  key={post._id} href={`/blogs/${post.currentslug}`}>
                        <div  className="group cursor-pointer  overflow-hidden transition-all duration-300 shadow-md px-3 py-2 flex flex-col">
                         <div className=" relative w-full h-80 overflow-hidden rounded-sm  drop-shadow-xl ">
                            <Image
                            src={urlFor(post.mainImage).url()}
                            className="object-cover rounded-md object-left group-hover:scale-105
                            transition-all duration-300 ease-in-out  lg:object-center"
                            alt={post.title}
                            fill
                            priority
                            />

                         </div>
                         <div className="mt-5 flex-1">
                            <p className=" underline text-lg font-bold">{post.title}</p>
                            <p className=" text-gray-500 line-clamp-2">{post.description}</p>
                         </div>
                         <p className="mt-5 font-bold flex items-center group-hover:underline">
                            Read Post
                         <svg  xmlns="http://www.w3.org/2000/svg" 
                          width="24"  height="24"  viewBox="0 0 24 24" 
                           fill="none"  stroke="currentColor"  stroke-width="2" 
                            stroke-linecap="round"  stroke-linejoin="round"  
                            className="icon ml-4 icon-tabler icons-tabler-outline icon-tabler-trending-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17l6 -6l4 4l8 -8" />
                            <path d="M14 7l7 0l0 7" /></svg>
                         </p>
                    </div>
                     </Link>
                ))
            }
        </div>
    </div>
  )
}

export default BlogLists