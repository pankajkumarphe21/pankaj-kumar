import React from 'react'
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const About = () => {
  useGSAP(()=>{
    gsap.from(".pic",{
      opacity:0.2,
      duration:2.8,
      x:-70,
    })
    gsap.from(".content",{
      opacity:0.2,
      duration:1.5,
      y:20,
    })
  })
  return (
    <div className='mt-[60px] flex w-[100%]'>
      <div className='pic w-[24%] max-sm:hidden'>
        <img src="/profile.png" className='h-[300px] w-[270px] ml-[20px] mt-[100px]' alt="" />
      </div>
      <div className='content mt-[30px] w-[70%] max-sm:w-[90%] max-sm:ml-[5%] flex-col items-center justify-center'>
        <h1 className='text-4xl font-semibold flex justify-center'>About Me</h1>
        <p className='mt-[20px] flex items-center tracking-tight'><span className='mr-[14px] text-red-500 text-2xl'><BsFillRocketTakeoffFill/></span>Hello, I'm Pankaj Kumar, a B.Tech student at IIT (BHU), set to graduate in 2025 with a commendable CGPA of 7.33. My academic journey reflects my commitment to learning and growth, and I am excited to channel my passion for excellence into the tech industry.</p>
        <p className='mt-[20px] flex items-center tracking-tight'><span className='mr-[14px] text-red-500 text-2xl'><BsFillRocketTakeoffFill/></span>I'm not just your average tech enthusiast - I wield proficiency in a range of programming languages and tools, from C++, JavaScript, HTML, and CSS to a versatile toolkit including NodeJS, Express.JS, MongoDB, ReactJS, NextJS, Git, GitHub, VSCode, and Tailwind CSS. But it's not just about the technical stuff - my approach is also marked by subtle qualities like a hardworking ethos, unwavering dedication, and effective communication and teamwork skills.</p>
        <p className='mt-[20px] flex items-center tracking-tight'><span className='mr-[14px] text-red-500 text-2xl'><BsFillRocketTakeoffFill/></span>Beyond the classroom, I've dived into various projects that have been dynamic learning experiences, where my hard work has blended with a genuine love for technology. These endeavors have not only refined my problem-solving skills but also provided me with insights into the multifaceted world of technology. I'm driven by a fervor for Full Stack Web Development, Backend Development, and the intriguing field of Data analysis.</p>
        <p className='mt-[20px] flex items-center tracking-tight'><span className='mr-[14px] text-red-500 text-2xl'><BsFillRocketTakeoffFill/></span>I am eager to apply my skills in practical scenarios and always open to engaging discussions, exploring collaborations, or sharing insights into the ever-evolving tech landscape. I am enthusiastic about embracing new opportunities and contributing to innovative endeavors!</p>
        <div className='flex max-sm:flex-col mt-[50px] text-2xl'>
        <div className='ml-[103px] max-sm:ml-[43px] flex'><p className='text-yellow-500'>Based in </p>: India </div>
        <div className='ml-[43px] flex'><p className='text-yellow-500'>Current Company </p>: Field Genie </div>
        <div className='ml-[43px] flex'><p className='text-yellow-500'>Last Company </p>: Hindustan Morning </div>
        </div>
        <div className='flex gap-5 text-[30px] mt-[50px] mb-[60px] justify-center items-center'>
        <div className='border-2 p-3 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-300 rounded-[50%]'><a target='_blank' href="https://x.com/pankaj3k3"><FaTwitter/></a></div>
        <div className='border-2 p-3 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-800 rounded-[50%]'><a target='_blank' href="https://www.linkedin.com/in/pankaj-kumar-81bb84229/"><FaLinkedin/></a></div>
        <div className='border-2 p-3 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 rounded-[50%]'><a target='_blank' href="https://github.com/pankajkumarphe21"><FaGithub/></a></div>
        <div className='border-2 p-3 hover:bg-gradient-to-r hover:from-red-600 hover:to-yellow-500 hover:via-red-500 rounded-[50%]'><a target='_blank' href="https://www.instagram.com/pankaj_2002_22/"><BsInstagram/></a></div>
        </div>
      </div>
    </div>
  )
}

export default About