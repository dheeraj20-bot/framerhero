'use client'


import { InlineWidget } from "react-calendly";

export const BookaCall = () => {
  return (
    <div className=" !bg-black-100 py-20  ">
      <InlineWidget
    pageSettings={{
      backgroundColor: '#000319',
      hideEventTypeDetails: false,
      hideLandingPageDetails: false,
      primaryColor: '00a2ff',
      textColor: 'ffffff'
    }}
    url="https://calendly.com/parth-htk7"/>

   
  </div>
  )
}

