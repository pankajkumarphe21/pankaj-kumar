import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React,{useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = (e) => {
        setIsOpen(!isOpen);
        e.stopPropagation();
    };
    const nav=document.getElementById("navbar");
    if(isOpen){
      nav.classList.add('max-sm:flex')
      window.addEventListener("click",(e)=>{
        toggleNavbar(e)
      })
    }
    else{
      nav?.classList.remove('max-sm:flex')
    }
    useGSAP(()=>{
      var tl=gsap.timeline()
      tl.from(".img",{
        opacity:0,
        duration:0.2,
        y:-5,
        stagger:0.1
      })
      tl.from(".link",{
        opacity:0,
        duration:0.8,
        y:-5,
        stagger:0.1
      })
    })
  return (
    <div className="fixed top-0 w-[100%] shadow-xl h-[60px] z-10">
      <div className="bg-zinc-800 img font-bold h-[60px] text-xl flex max-sm:gap-[20px] gap-[1%] items-center">
        <div className="h-[60px] overflow-hidden ml-[9%] flex justify-center items-center">
            <img id="image" className="rounded-[50%] border-red-500 border-2" src="/profile.jpg" height={50} width={50} alt="" />
        </div>
        <h1 className="text-lg text-orange-400">Welcome</h1>
      <div className="flex gap-10 ml-[7%] max-sm:hidden">
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About Me</Link>
        <Link className="link" to="/education">Education</Link>
        <Link className="link" to="/skills">Skills</Link>
        <Link className="link" to="/projects">Projects</Link>
        <Link className="link" to="/experience">Experience</Link>
        <Link className="link" to="/contact">Contact Me</Link>
      </div>
      <div className="sm:hidden text-xl menu-btn flex justify-end w-[80%] mr-[40px]" id="menu-btn" onClick={toggleNavbar}>
        {
          !isOpen ? '☰' : 'X'
        }
      </div>
      
    </div>
    <div className="hidden bg-zinc-900 z-20 max-sm:flex-col gap-[5px] pb-[11px] pt-[9px] text-xl justify-center items-center w-[40%] ml-[56%]" id="navbar">
      <Link className="text-blue-500" to="/">Home</Link>
        <Link className="text-blue-500" to="/about">About Me</Link>
        <Link className="text-blue-500" to="/education">Education</Link>
        <Link className="text-blue-500" to="/skills">Skills</Link>
        <Link className="text-blue-500" to="/projects">Projects</Link>
        <Link className="text-blue-500" to="/experience">Experience</Link>
        <Link className="text-blue-500" to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
