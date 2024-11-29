import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { CgToolbox } from "react-icons/cg";

const Element=()=>(
  <div className='w-[100%] mt-[20px] flex gap-[50px] justify-center items-center'>
      <CgToolbox className='text-7xl max-sm:hidden'/>
      <div className='bg-[#212121] h-[320px] mb-[80px] max-sm:h-[580px] w-[800px] max-sm:w-[300px] shadow-xl rounded-3xl'>
        <h1 className='mt-[20px] ml-[45px] text-3xl font-semibold'>Hindustan Morning</h1>
        <div className='flex max-sm:flex-col justify-between mt-[10px] mx-[30px]'>
          <p className='text-blue-500'>Full Stack web Developer</p>
          <p className='max-sm:mt-[10px]'>May 2024 - June 2024</p>
        </div>
        <div className="w-[100%] flex justify-center mt-[5px]">
        <div className="flex bg-white h-[1px] opacity-10 w-[736px] justify-center"></div>
        </div>
        <ul className="list-disc ml-[60px] w-[80%] max-sm:w-[70%] mt-[20px]">
          <li>Developed a dynamic real-time dashboard for tracking and analyzing trending stories from social media platforms.</li>
          <li>Implemented features for displaying news updates from government portals such as PMO and mygov.in.</li>
          <li>Integrated OpenAI for automated content, improving headers, summaries, and user interaction in real-time.</li>
        </ul>
        {/* <div className='mt-[10px] ml-[40px]'><span className='text-blue-500 text-lg'>Links:- </span><a target='_blank' href="https://www.spiritiitbhu.com/">Website</a></div>
        <div className='mt-[1px] ml-[40px]'><span className='text-blue-500 text-lg'>Works:- </span><a target='_blank' href="https://github.com/Tonystark121/Spirit-24Website">Github</a></div> */}
      </div>
      </div>
)

const Experience = () => {
  useGSAP(()=>{
    gsap.from(".experience",{
      opacity:0,
      duration:1
    })
  })
  return (
    <div className='experience mt-[60px]'>
      <h1 className='w-[100%] font-semibold flex justify-center text-4xl text-orange-300 mt-[90px]'>Experience</h1>
      <div className='flex justify-center'>
      <h1 className='w-[100%] max-sm:w-[80%] font-semibold flex justify-center text-lg mt-[9px]'>Bringing a blend of innovation, expertise, and dedication to every project, ensuring impactful results</h1>
      </div>
      <div className='w-[100%] mt-[20px] flex gap-[50px] justify-center items-center'>
      <CgToolbox className='text-7xl max-sm:hidden'/>
      <div className='bg-[#212121] h-[320px] mb-[80px] max-sm:h-[580px] w-[800px] max-sm:w-[300px] shadow-xl rounded-3xl'>
        <h1 className='mt-[20px] ml-[45px] text-3xl font-semibold'>Spirit, IIT BHU</h1>
        <div className='flex max-sm:flex-col justify-between mt-[10px] mx-[30px]'>
          <p className='text-blue-500'>Technical Team Manager</p>
          <p className='max-sm:mt-[10px]'>January 2023 - Apr 2023</p>
        </div>
        <div className="w-[100%] flex justify-center mt-[5px]">
        <div className="flex bg-white h-[1px] opacity-10 w-[736px] justify-center"></div>
        </div>
        <ul className="list-disc ml-[60px] w-[80%] max-sm:w-[70%] mt-[20px]">
          <li>Technical Head, Spirit, IIT BHU, leading the development of a conference website using React.</li>
          <li>Focused on crafting a responsive and visually appealing UI to enhance user experience.</li>
          <li>Empowering students to explore and register for diverse opportunities through the intuitive platform.</li>
        </ul>
        <div className='mt-[10px] ml-[40px]'><span className='text-blue-500 text-lg'>Links:- </span><a target='_blank' href="https://www.spiritiitbhu.com/">Website</a></div>
        <div className='mt-[1px] ml-[40px]'><span className='text-blue-500 text-lg'>Works:- </span><a target='_blank' href="https://github.com/itsgeekhokage/spirit-24">Github</a></div>
      </div>
      </div>
      <Element/>
    </div>
  )
}

export default Experience