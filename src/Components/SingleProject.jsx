import React from "react";
import { projects } from "./Projects";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { useSelector } from "react-redux";

const SingleProject = () => {
  const index=useSelector(state=>state.index)
  const project=projects[index]
  return (
    <div className="flex justify-center max-sm:h-[1000px] h-[590px] mt-[90px]">
      <div className="w-[80%] max-sm:flex-col max-sm:h-[980px] flex shadow-xl h-[540px]">
          <div className="flex">
          <Link to='/projects'>
            <img className="sm:hidden bg-white rounded-[50%] h-[20px]" src="/icons8-delete.svg" alt="Hi"/>
          </Link>
          </div>
      <div className="mt-[20px] w-[48.2%] max-sm:w-[100%] flex flex-col p-4">
        <img className="h-[240px] w-[430px] rounded-lg" src={`${project.image}`} alt=""/>
        <div className="mt-[40px] ml-[20px] ">
        <p className="text-3xl font-semibold">{project.heading}</p>
        <p className="mt-[3px] text-orange-500">Category : {project.category}</p>
        <div className="flex w-[80%] mt-[20px] ml-[20px] flex-wrap">
        {
          project.tools.map((val,i)=>(
            <ul key={i} className="list-disc">
              <li className="ml-[-10px] mr-[50px]">
                {val}
              </li>
            </ul>
          ))
        }
        </div>
        </div>
      </div>
      <div className="w-[49%] max-sm:w-[100%] flex flex-col">
      <div className="flex justify-end mt-[5px]"><div className="rounded-[50%] flex justify-center items-center">
          <Link to='/projects'>
          <img className="bg-white rounded-[50%] h-[20px] max-sm:hidden" src="/icons8-delete.svg" alt="Hi"/>
          </Link>
        </div></div>
        <div className="flex flex-col mt-[10px]">
        <p className=" text-orange-500 font-semibold text-4xl">Description</p>
        <div className="flex flex-col max-sm:overflow-visible overflow-scroll p-4 mt-[20px]">
          {
            project.description.map((desc,i)=>(
              <div className="flex items-center mb-[10px]" key={i}><div className="gap-1 flex justify-center">
                <p>👉</p><p>{desc}</p>
                </div></div>
            ))
          }
        </div>
        <div className="flex max-sm:flex-col justify-between mt-[20px] ml-[20px]  ">
        <a href={`${project.live}`} target="_blank" className="border-2 text-xl max-sm:w-[200px] flex gap-4 border-orange-500 py-3 px-6 max-sm:mb-[20px]"><TbWorld className="text-3xl"/>Live</a>
          <a href={`${project.github}`} target="_blank" className="border-2 text-xl max-sm:w-[200px] flex gap-4 border-orange-500 py-3 px-6 max-sm:mb-[20px]"><FaGithub className="text-3xl"/>View Code</a>
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SingleProject;
