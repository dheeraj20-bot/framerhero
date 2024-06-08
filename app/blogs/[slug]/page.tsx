import { groq } from "next-sanity";
import React, { cache } from 'react'
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponents";

type Props = {
  params:{
    slug:string
  }
}

export const revalidate = 60

const getData = cache(async(slug:string)=>{
  const query = `*[_type=='post' && slug.current == $slug][0]{
    ...,
    author->,
    categories[]->
  }`;
  const data  = await client.fetch(query,{slug})
  return data;
})

const BlogPage = async ({params:{slug}}:Props) => {
  const data:any = await getData(slug)
  console.log(data.body);
  
  return (
    <article className=" relative antialiased  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] 
     pt-20 overflow-hidden pb-28 w-full mx-auto">
                {/* <div className="absolute top-10 h-[90rem]   w-full "></div> */}
    <div className="max-w-6xl mx-auto px-3">


  <section className="space-x-3 py-8 text-slate-900/95   dark:text-white sm:py-16">
   <h1 className="text-3xl sm:text-5xl mb-10 font-bold">{data.title}</h1>
    <div className="flex flex-row items-center gap-3">
    <Image
      className="rounded-full"
      src={urlFor(data?.author.image).url()}
      alt={data.title}
      width={40}
      height={40}
      priority
    />
    
    <div className="flex flex-col">
      <p className="text-lg font-medium">{data?.author?.name}</p>
      
      <div className="flex gap-2">
        <p>
          {new Date(data._createdAt).toLocaleDateString("en-US", {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </p>
        |
        <p>3 min read</p>
      </div>
    </div>
  </div>
   </section>
 
    <section className="" >
            <div className="overflow-hidden rounded-2xl">
            <Image
            className=" w-full object-cover hover:scale-105  transition-all duration-300  h-full"
            src={urlFor(data?.mainImage).url()}
            alt={data.title}
            width={1000}
            height={1000}
            priority
            /> 
            </div>   
    </section>
      <PortableText  value={data.body} components={RichTextComponents} />
      </div>
    </article>
  )
}

export default BlogPage