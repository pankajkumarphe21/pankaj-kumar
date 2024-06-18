import React,{useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const nav=document.getElementById("navbar");
    if(isOpen){
      nav.classList.add('max-sm:flex')
      document.getElementById('image')?.classList.add('hidden')

    }
    else{
      nav?.classList.remove('max-sm:flex')
      document.getElementById('image')?.classList.remove('hidden')
    }
  return (
    <div className="fixed top-0 w-[100%] shadow-xl z-10">
      <div className="bg-zinc-800 font-bold h-[60px] text-xl flex max-sm:gap-[20px] gap-[1%] items-center">
        <div className="h-[60px] overflow-hidden ml-[3%] flex justify-center items-center">
            <img id="image" className="rounded-[50%] border-red-500 border-2" src="/profile.jpg" height={50} width={50} alt="" />
        </div>
        <h1 className="text-lg text-orange-400">Welcome</h1>
      <div className="flex gap-10 ml-[7%] max-sm:hidden">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/education">Education</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact Me</Link>
      </div>
      <div className="sm:hidden text-xl menu-btn flex justify-end w-[80%] mr-[40px]" id="menu-btn" onClick={toggleNavbar}>☰</div>
      <div className="hidden bg-zinc-900 z-20 max-sm:flex-col gap-[1px] mt-[170px] text-xl justify-end w-[100%] mr-[40px] " id="navbar">
      <Link className="text-blue-500" to="/">Home</Link>
        <Link className="text-blue-500" to="/about">About Me</Link>
        <Link className="text-blue-500" to="/education">Education</Link>
        <Link className="text-blue-500" to="/skills">Skills</Link>
        <Link className="text-blue-500" to="/projects">Projects</Link>
        <Link className="text-blue-500" to="/experience">Experience</Link>
        <Link className="text-blue-500" to="/contact">Contact</Link>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
