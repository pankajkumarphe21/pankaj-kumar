import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-[100%] shadow-xl z-10">
      <div className="bg-zinc-800 font-bold h-[60px] text-xl flex gap-[1%] items-center">
        <div className="h-[60px] overflow-hidden ml-[3%] flex justify-center items-center">
            <img className="rounded-[50%] border-red-500 border-2" src="/profile.jpg" height={50} width={50} alt="" />
        </div>
        <h1 className="text-lg text-orange-400 max-sm:mr-[200px]">Welcome</h1>
      <div className="flex gap-10 ml-[7%] max-sm:hidden">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/education">Education</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
