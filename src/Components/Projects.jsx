import React, { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaExpand } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {updateIndex} from './../features/project/projectSlice'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const projects = [
  {
    heading: "Spirit (IIT BHU)",
    image: "/w1.png",
    github: "https://github.com/itsgeekhokage/spirit-24",
    live:"https://www.spiritiitbhu.com/",
    tools:['ReactJs','HTML','CSS','Javascript'],
    category:'FrontEnd',
    description:['Collaborated within a team of four to conceptualize, design, and develop the Spirit-24 website.',
      'A comprehensive platform providing detailed event information and streamlined event registration processes.'
    ]
  },
  {
    heading: "AI-Powered Chat Application",
    image: "/w5.png",
    github: "https://github.com/pankajkumarphe21/soen_client",
    live:"https://soen-client.vercel.app",
    tools:[ 'React', 'Tailwind CSS', 'ExpressJs', 'NodeJs', 'MongoDB', 'WebContainer', 'highlight.js'],
    category:'Full Stack',
    description:['Developed a real-time chat application using polling for message updates.',
      'Integrated Gemini AI API to enable AI-powered responses within chat conversations.',' Implemented a web-based code editor with highlight.js for syntax highlighting.',' Utilized WebContainer to run Express.js applications directly in the frontend.'
    ]
  },
  {
    heading: "Notes App",
    image: "/w3.png",
    github: "https://github.com/pankajkumarphe21/trial",
    live:"https://trial-theta-indol.vercel.app/profile",
    tools:['NodeJs','ExpressJs','Mongo DB','Mongoose','EJS','JsonWebToken','Tailwind CSS'],
    category:'Backend',
    description:['Made a Note Making website from scratch.',
      'Notes will be saved even after logout because notes will be saved in the Database.'
    ]
  },
  {
    heading: "Social App",
    image: "/w4.png",
    github: "https://github.com/pankajkumarphe21/socialclient",
    live:"https://socialclient-azure.vercel.app/",
    tools:['NodeJs','ExpressJs','Mongo DB','Mongoose','React','Multer','Redux Toolkit','Redux Persist'],
    category:'Full Stack',
    description:['Implemented backend functionality to handle user posts, friend searches, and data storage.',
      'Utilized Redux for state management and SASS for styling and UI enhancement.',
      'Integrated Redux Persist to maintain and rehydrate the state, providing data consistency across page reloads.'
    ]
  },
];

const Projects = () => {
  const dispatch=useDispatch();
  const Card = ({val}) => {
    return (
      <div
        className="project flex flex-col h-[235px] overflow-hidden w-[380px] justify-between border-white rounded-md border-2"
      >
        <div className="absolute h-[195px] w-[376px] rounded-t-md overflow-hidden">
          <img
            className="h-[110px] opacity-45 w-[122px]"
            src={val.val.image}
            alt=""
          />
        </div>
        <div className="absolute h-[231px] w-[376px]">
          <div className="flex h-[231px] w-[376px] flex-col justify-between">
            <div className="flex">
              <div className="flex flex-col ml-[40%] mt-[10%]">
              <a target="_blank"
                  href={val.val.github}><FaGithub
                  target="_blank"
                  href={val.val.github}
                  className="text-4xl text-white bg-zinc-800"
                /></a>
                <a target="_blank" className="" href={val.val.github}>
                  Code
                </a>
              </div>
              <div className="flex flex-col ml-[40px] mt-[9.43%] items-center">
              <a target="_blank"
                  href={val.val.live}><TbWorld
                  target="_blank"
                  href={val.val.live}
                  className="text-[2.4rem] text-white bg-zinc-800"
                /></a>
                <a target="_blank" className="" href={val.val.live}>
                  Live
                </a>
              </div>
              <div className="flex flex-col ml-[40px] mt-[10%]">
                <Link onClick={()=>{dispatch(updateIndex(val.i));
                }} to={`/singleproject`}><FaExpand
                  
                  className="text-4xl text-white bg-zinc-800"
                /></Link>
                <Link onClick={()=>{dispatch(updateIndex(val.i));
                }} to={`/singleproject`}>More</Link>
              </div>
            </div>
            <div className="flex flex-wrap gap-[13px] ml-[2%]">
              {
                val.val.tools.map((val,i)=>(
                  <p className="text-sm" key={i}>{val}</p>
                ))
              }
            </div>
            <div className="bg-zinc-900 border-t-[1px] border-white h-[36px] flex justify-center items-center rounded-b-md">
              <p className="text-lg font-semibold">{val.val.heading}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  useGSAP(()=>{
    gsap.from(".projects",{
      opacity:0,
      duration:1.3,
      y:20
    })
  })
  return (
    <div className="projects w-[100%] flex justify-center items-center mb-[100px]">
      <div className="mt-[60px] w-[80%] flex flex-col justify-center items-center">
        <h1 className="text-4xl my-[20px] text-orange-400">Project Area</h1>
        <div className="flex flex-wrap gap-[60px] justify-center">
          {projects.map((val, i) => {
            return <Card key={i} val={{val:val,i:i}} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
