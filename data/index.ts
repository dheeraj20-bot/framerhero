import { Changes, Happy, Review, Tell, Upload } from "@/components/ourwork/WorkCard";
import { title } from "process";

export const clientImages = [
    { name: "5MinuteCrafts", url: "/5MinuteCrafts.png" },
    { name: "Bestie", url: "/Bestie.png" },
    { name: "BJP", url: "/BJP.webp" },
    { name: "CocaCola", url: "/cocacola.svg" },
    // { name: "DevelopGoodHabit", url: "/DevelopGoodHabit.jpg" },
    { name: "EscapingOrdinary", url: "/EscapingOrdinary.png" },
    // { name: "Fameoungeps", url: "/Fameloungeps.png" },
    { name: "wealthywomen", url: "/wealthywomen.png" },
    // { name: "GreenhouseLogo", url: "/greenhouse-logo.svg" },
    { name: "IFFCO Kisan", url: "/IFFCO Kisan.png" },
    { name: "Jill Peach", url: "/jill-peach.webp" },
    { name: "McDonald", url: "/mcdonald.png" },
    { name: "Nanny Parent Connection", url: "/NannyParentConnection.png" },
    { name: "Some Good News", url: "/Some Good News.png" },
    { name: "Tinder", url: "/tinder.png" },
  ];

export  const navItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Our Work", url: "/our-work" },
    { name: "Blogs", url: "/blogs" }
  ];

  export const testimonials = [
    {
      quote: "GHA Media is a core part of our team now and the success and reach of the videos is based on there amazing editing skills. Team also does the research for content that fits the video and gives wonderful suggestions to improve the video.",
      name: "Giuliano Lenz",
      title: "Some Good News, Europe",
      image:"/Giuliano.png",
      
      

  },
    {
        quote:"If you want a dynamic, forward-thinking and creative contractor to help your team with video production/editing, look no further than GHA Media. We have been working with them for a little over two years now and they are a HUGE addition to our team. They produces high quality YouTube/IGTV videos for us and is always forthcoming with feedback on how we can improve our raw video. We will work with them for a long time to come!",
        name: "Colby Underwood",
        title: "Nanny Parent Connection",
        image:"/Colby.jpg",
        className: ""
    },
    {
      quote: "Working with GHA Media for video editing has been a game changer. Their editors get my style, requiring minimum direction and meet deadlines. For a hassle free experience, choose them! Highly recommended!",
      name: "Mel Shah",
      title: "Famelounge-ps",
      image:"/Mel.png",
      
  },
   
    {
        quote: "GHA Media has been our go to choice for video editing over the past five years. Their editors demonstrate an intuitive understanding of our brand, making the creative process efficient and hassle free. This partnership has played a pivotal role in our growth, making them an integral part of our success story.",
        name: "Prashant Kr. Singh",
        title: "Bestie Health",
        image:"/Giuliano.png"
    },
    {
        quote: "This is a testimonial for GHA Media to be specific for Sanskriti, with whom I've been working for over a year right now. And there has been some things I liked about the corporation such as great quality and decent pricing.",
        name: "Jaroslav Jakl",
        title: "Geld Magnet",
        image:"/Giuliano.png"
    },
    {
        quote: "GHA Media has transformed our video content over the past three years. Their team understands our brand and audience perfectly, making the process smooth and enjoyable. The videos are always engaging and visually stunning, boosting our online presence significantly. GHA Media feels like part of our family. Highly recommended!        ",
        name: "Steve J. Scott",
        title: "Develop Good Habits",
        image:"/Giuliano.png",  
    },
    {
      quote: "GHA Media exceeds expectations of video editors. They are intuitive, creative, and artistic. They turns my beauty tutorial videos into engaging Youtube and IG ready content that stands out. I&apos;ve gotten many compliments from my customers and followers that the video introduction that they made is exceptional. I would highly recommend there talents to anyone looking for editors with there pulse on what&rsquo;s trending in online video content.",
      name: "Meagan Carboney",
      title: "Jill Razor",
      image:"/Giuliano.png"
  },
    
];

  
export const features = [
  {
    title: "Upload your footage ",
    id: "Upload",
    image:"/upload.webp",
    card: Upload,
    description: "Easily upload your video clips using our drag-and-drop interface or browse your files."
  },
  {
    title: "Tell us what you want ✨",
    id: "Tell",
    card: Tell,
    description: "Provide clear instructions or a script for your desired video editing. You can also attach reference videos for inspiration."
  },
  {
    title: "Review your video - lightning fast! ⚡️",
    id: "Review",
    card: Review,
    description: "Get your expertly edited video back as quickly as the next day (depending on complexity)."
  },
  {
    title: "Need changes? We've got you covered! ",
    id: "Changes",
    card: Changes,
    description: "Unlimited revisions are included until you're absolutely satisfied with your final video."
  },
  {
    title: "Love it? Let's create more together! ",
    id: "Happy",
    card: Happy,
    description: "We're here to help you bring your video ideas to life, so come back anytime for more awesome edits!"
  }
];

export const benefits = [
  { 
    id: 1,
    title: "Fast Turnaround",
    descr: "Ensure your projects progress steadily and consistently meet deadlines.",
    image:"/benefits/first draft.webp"
  },
  {
    id:2,
    "title": "Unlimited Revisions",
    "descr": "Long review cycles are a thing of the past!",
    image:"/benefits/unlimted revisions.webp"

  },
  {
    id:3,
    "title": "Real-Time Collaboration",
    "descr": "Your project manager replies to every message within an hour (US Eastern Time).",
    image:"/benefits/real time collabiration.webp"

  },
  {
    id:4,
    "title": "Project Dashboard",
    "descr": "Effortlessly see all your projects in one place.",
    image:"/benefits/dashboard.webp"

  },
  {
    id:5,
    "title": "Licensed Media",
    "descr": "Say goodbye to copyright claims and the hassle of sourcing the right music, sound effects, and stock footage.",
    image:"/benefits/licenced media.webp"

  },
  {
    id:6,
    "title": "Affordable Pricing",
    "descr": "Rest assured you'll stay on budget.",
    image:"/benefits/transperent pricing.webp"

  },
  {
    id:7,
    "title": "Satisfaction Guarantee",
    "descr": "We guarantee you'll love our editing services! Sign up today for a 14-day trial, and if you're not thrilled after 14 days, simply cancel and we'll refund your money. Start now with confidence!",
    image:"/benefits/14 days guarante.webp"

  }
]


export const faqs = [
    {
      question: "01. What Video Editing software do you use?",
      answer: "Digital Publishing System adalah portal berbasis web yang menjembatani penerbit Kompas Gramedia dengan pengarang."
    },
    {
      question: "02. How many Raw Footage can I submit?",
      answer: "Digital Publishing System adalah portal berbasis web yang menjembatani penerbit Kompas Gramedia dengan pengarang."
    },
    {
      question: "03. Do I get my Project Files too?",
      answer: "Digital Publishing System adalah portal berbasis web yang menjembatani penerbit Kompas Gramedia dengan pengarang."
    },
    {
      question: "04. Your Editors in-house, or Freelance??",
      answer: "Digital Publishing System adalah portal berbasis web yang menjembatani penerbit Kompas Gramedia dengan pengarang."
    },
    {
      question: "05. Is there a minimum commitment?",
      answer: "Digital Publishing System adalah portal berbasis web yang menjembatani penerbit Kompas Gramedia dengan pengarang."
    },
    {
      question: "06. What's the commitment?",
      answer: "Digital Publishing System adalah portal berbasis web yang menjembatani penerbit Kompas Gramedia dengan pengarang."
    },
    {
      question: "07. Can you guys receive Templates?",
      answer: "Digital Publishing System adalah portal berbasis web yang menjembatani penerbit Kompas Gramedia dengan pengarang."
    },
    {
      question: "08. Do you guys also do assembly or partial edits?",
      answer: "Digital Publishing System adalah portal berbasis web yang menjembatani penerbit Kompas Gramedia dengan pengarang."
    },
    {
      question: "09. Are your packages Truly Unlimited?",
      answer: "Digital Publishing System adalah portal berbasis web yang menjembatani penerbit Kompas Gramedia dengan pengarang."
    },
   
]


export const pricingPlans = [
  {
      title: "Basic",
      price: "₹215.87",
      billingCycle: "month",
      billedAnnually: true,
      save: "11%",
      features: [
          "Small reply boost",
          "Encrypted direct messages",
          "Bookmark folders",
          "Highlights tab",
          "Edit post",
          "Post longer videos",
          "Longer posts"
      ]
  },
  {
      title: "Premium",
      price: "₹566.67",
      billingCycle: "month",
      billedAnnually: true,
      save: "12%",
      features: [
          "Everything in Basic, and",
          "Half Ads in For You and Following",
          "Larger reply boost",
          "Get paid to post",
          "Checkmark",
          "Grok Early Access",
          "X Pro, Analytics, Media Studio",
          "Creator Subscriptions"
      ]
  },
  {
      title: "Premium+",
      price: "₹1,133.33",
      billingCycle: "month",
      billedAnnually: true,
      save: "12%",
      features: [
          "Everything in Premium, and",
          "No Ads in For You and Following",
          "Largest reply boost",
          "Write Articles"
      ]
  }
];

// Example of using the map function to display plan titles

