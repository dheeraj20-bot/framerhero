'use client'
import Script from "next/script";
import { InlineWidget } from "react-calendly";

export const BookaCall = () => {
  return (
    <div className=" max-w-4xl  rounded-3xl  overflow-clip mx-auto  py-40  ">
      
      
    <div className="calendly-inline-widget w-[20rem] sm:w-[40rem] mx-auto h-[38.8rem] sm:h-[48.5rem] px-4 rounded-3xl shadow-lg shadow-yellow-400 " data-url="https://calendly.com/info-vdgs/30min?hide_gdpr_banner=1&background_color=090909&text_color=ffffff&primary_color=e9ff00" >
    </div>
      <Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>
  </div>
  )
}

