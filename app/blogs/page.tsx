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
  }`
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
   <div className="overflow-x-hidden pt-10">
     <div  className="px-3 py-6">
         <h1 className="text-3xl mb-2 text-center font-semibold lg:text-5xl">GHAMEDIA{" "}<span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500">Blogs</span> </h1>
         <p></p>
      </div>
    <BlogLists posts={posts}/>
    
   </div>
  );
}
