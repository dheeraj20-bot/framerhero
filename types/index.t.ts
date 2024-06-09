
type Base = {
    _createdAt:string
    _id:string;
    _rev:string;
    _type:string;
    _updatedAt:string
}

interface Post extends Base {
    author:Author;
    body:Block[];
    categories:Category[]
    mainImage:Image;
    currentslug:string;
    title:string;
    description:string
}

interface ImageCategory extends Base {
    name:string
    currentslug:string;
    title: string;
    imageUrl: string;
    description:string
}

interface ImagesData extends Base {
    name:string
    currentslug:string;
    title: string;
    imageUrl: string;
    description:string
}

interface Author extends Base {
    bio:Block[]
    image:Image;
    name:string;
    slug:Slug 
}

interface Image{
    _type:"Image",
    asset:Reference
}




interface Slug{
    _type:"slug";
    current:string
}

interface Reference{
    _ref:string;
    _type:'reference'
}

interface Block{
    _key:string;
    _type:"block";
    children:Span[];
    marDefs:any[];
    style:"normal" | "h1" | "h2" |"h3" | "h4" | "blockquote"
}

interface Span{
    _key:string;
    _type:"span";
    marks:string[];
    text:string
}

interface Category extends Base{
    description:string;
    title:string
}

interface MainImage{
    type:"image";
    asset:Reference;
}

interface Title {
    _type:"string";
    current:string
}


 interface Work {
    videoUrl: string;
    title: string;
    categories: 'Promotional' | 'Corporate' | 'Social' | 'Youtube' | 'Event';
  }
  
  