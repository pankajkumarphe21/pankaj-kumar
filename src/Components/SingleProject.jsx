import React from "react";
import { projects } from "./Projects";
import { TiDeleteOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const SingleProject = ({index}) => {
  const project=projects[index]
  return (
    <div className="flex justify-center h-[590px] mt-[90px]">
      <div className="w-[80%] flex shadow-xl h-[540px]">
      <div className="mt-[20px] w-[48.2%] max-sm:w-[170%] flex flex-col p-4">
        <img className="h-[240px] w-[430px] rounded-lg" src={`${project.image}`} alt=""/>
        <div className="mt-[40px] ml-[20px] ">
        <p className="text-3xl font-semibold">{project.heading}</p>
        <p className="mt-[3px] text-orange-500">Category : {project.category}</p>
        <div className="flex w-[80%] mt-[20px] ml-[20px] flex-wrap">
        {
          project.tools.map((val,i)=>(
            <ul className="list-disc">
              <li key={i} className="ml-[-10px] mr-[50px]">
                {val}
              </li>
            </ul>
          ))
        }
        </div>
        </div>
      </div>
      <div className="w-[49%] flex flex-col">
      <div className="flex justify-end mt-[5px]"><div className="rounded-[50%] flex justify-center items-center">
          <Link to='/projects'><TiDeleteOutline className="text-black text-2xl bg-white rounded-[50%]"/></Link>
        </div></div>
        <div className="flex flex-col mt-[10px]">
        <p className=" text-orange-500 font-semibold text-4xl">Description</p>
        <div className="flex flex-col overflow-scroll p-4 mt-[20px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni alias asperiores quasi consectetur sequi, maxime recusandae quaerat corrupti illum eos odio tempore! Illo odio ea id eum laborum fuga omnis corporis officia dolorem sequi sint, illum esse, harum praesentium ipsum reiciendis provident iure. Beatae eos molestiae unde et asperiores tenetur alias quia tempora? Quia necessitatibus animi modi, cum magnam consequatur, totam asperiores molestias porro at neque nam sequi odio sunt dolore, assumenda obcaecati perferendis quaerat atque magni molestiae reprehenderit error. Consequuntur molestiae dolore minima a laboriosam incidunt voluptate aliquid mollitia voluptatibus facere velit, blanditiis nulla, laborum unde dolorem inventore dolores.
        </div>
        <div className="flex justify-between">

        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SingleProject;
