import BlogLists from "@/components/BlogLists";
import { client } from "@/sanity/lib/client";
import { Metadata } from "next";
import { groq } from "next-sanity";


export const metadata:Metadata= {
  title:"Blog",
  keywords:"blogs free images Download"
}

export const revalidate = 60

const getPosts = async()=>{
  const query = groq`*[_type=="post"] | order(_createdAt desc){
    _id,
    title,
    "currentslug":slug.current,
    mainImage,
    _createdAt,
    description,
    categories
  }[0...10]`
  return client.fetch(query)
}

const getTotalPosts = async()=>{
      const query = groq`count(*[_type == "post"])`
      return client.fetch(query)
}

export default async function BlogPage({ searchParams,
}: {searchParams?: {page?: string;};
}) {
  const posts = await getPosts()
 
  return (
   <div className="overflow-x-hidden relative h-screen w-full  pt-24">
          <div className="absolute top-10 h-[90rem]   w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

     <div  className="px-3 relative py-6">
         <h1 className="text-3xl mb-2 text-center font-semibold lg:text-5xl">GHAMEDIA{" "}<span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">Blogs</span> </h1>
         <p></p>
      </div>
    <BlogLists posts={posts}/>
    
   </div>
  );
}
