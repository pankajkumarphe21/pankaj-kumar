import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdCloudDownload } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import PreviewSkills from '../parts/PreviewSkills'
import Highlights from '../parts/Highlights'
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  useGSAP(()=>{
    gsap.from(".home",{
      opacity:0,
      duration:0.8,
      y:50
    })
  })
  return (
    <>
    <Link to='/contact' className="fixed z-10 bg-blue-500 bottom-6 right-10 h-[50px] w-[160px] flex justify-center items-center rounded-md border-2 border-white">
          Contact Me
        </Link>
    <div className="flex flex-col home top-[60px]">
      <div className="h-[400px] flex max-sm:flex-col">
        <div className="w-[47%] max-sm:w-[90%] py-[11%] pl-[12%] max-sm:py-[22%] flex flex-col">
          <h1 className="text-blue-500 font-medium max-sm:text-[1.5rem] text-[2.5rem] mb-[1px]">
            Hello World!
          </h1>
          <p className="text-[2.4rem] max-sm:text-[1.4rem] font-medium">I am Pankaj Kumar</p>
          <p className="text-[1.9rem] max-sm:text-[1.2rem] font-medium text-blue-500">
            Full Stack Developer, Data Analyst
          </p>
          <p className="text-[1.3rem] max-sm:text-[0.9rem] pr-[12%]">
            Hi there, I am Pankaj, a final year student at IIT BHU striving to
            make my dreams into reality!
          </p>
          <div className="flex mt-[50px]">
            <div className="h-[86px] cursor-pointer w-[96px] hover:scale-105 border-2 rounded-lg flex flex-col items-center">
              <IoMdCall className="mt-[16px] text-[24px]" />
              <a href="tel:+917751016519" className="mt-[9px] text-sm">Fix A Call</a>
            </div>
            <div className="h-[86px] cursor-pointer hover:scale-105 w-[96px] border-2 ml-[20px] rounded-lg flex flex-col items-center">
              <MdCloudDownload className="mt-[10px] text-[24px]" />
              <a target="_blank" href="https://drive.google.com/file/d/1GIFZewDg4HZ4QhNTncZrOiBRaExJ8iGJ/view?usp=sharing" className="mt-[5px] text-sm">Download</a>
              <a target="_blank" href="https://drive.google.com/file/d/1GIFZewDg4HZ4QhNTncZrOiBRaExJ8iGJ/view?usp=sharing" className="text-sm">Resume</a>
            </div>
            <div className="h-[86px] cursor-pointer w-[96px] hover:scale-105 border-2 ml-[20px] rounded-lg flex flex-col items-center">
              <HiOutlineDesktopComputer className="mt-[10px] text-[24px]" />
              <Link className="mt-[5px] text-sm" to={'/projects'}>Go to</Link>
              <Link className="text-sm" to={'/projects'}>Projects</Link>
            </div>
          </div>
        </div>
        <div className="pl-[10%] pt-[5%] max-sm:pl-[0%] max-sm:flex max-sm:justify-center">
          <img className="h-[400px] max-sm:h-[250px]" src="/profile.png" alt="" />
        </div>
        
      </div>
      <div className="mt-[200px] max-sm:mt-[400px] w-[100%] mb-[40px] flex justify-center items-center ">
        <div className="h-[200px] w-[80%] max-md:h-[320px] max-sm:h-[400px] flex bg-[#161B22] rounded-[0.6rem] overflow-hidden">
          <div className="bg-green-600 h-[200px] max-md:h-[320px] max-sm:h-[400px] w-[17px]"></div>
          <div className="flex flex-col ml-[14px] max-sm:mr-[14px] justify-center">
            <ul className="list-disc ml-[20px]">
              <li>
                <span className="font-bold">Education</span>: B.Tech, IIT (BHU),
                graduating in 2025, CGPA-7.33.
              </li>
              <li>
                <span className="font-bold">Skills</span>: C, C++, JavaScript,
                HTML, CSS, NodeJS, Express.JS, MongoDB, ReactJS, Git, more
              </li>
              <li>
                <span className="font-bold">Projects</span>: See here
              </li>
              <li>
                <span className="font-bold">Interests</span>: Full Stack
                Development, Data Analysis, Android Development.
              </li>
              <li>
                <span className="font-bold">Readiness</span>: Eager to apply
                skills and open to collaborations.
              </li>
              <li>
                <span className="font-bold">Professional Experience</span>:
                Currently Not Working, previously at Spirit.
              </li>
              <li>Learn more about me by clicking here</li>
            </ul>
          </div>
        </div>
      </div>
      <PreviewSkills/>
      <Highlights/>
    </div>
    </>
  );
};

export default Home;
