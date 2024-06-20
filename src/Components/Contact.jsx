import React from 'react'
import { IoMdCall } from 'react-icons/io'
import { FaGithub,FaLinkedin,FaTwitter } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'

const Contact = () => {
  return (
    <div className='sm:h-screen w-[100%] text-black mt-[60px]'>
      <div className='sm:h-[42%] rounded-b-[6%] w-[100%] flex flex-col font-semibold justify-end text-[2.75rem] max-sm:text-xl bg-yellow-600'>
      <div className='flex h-[69%] max-sm:mt-[50px] mb-[10px] justify-center items-end'>Let's Create Something Together!</div>
      <div className='flex max-sm:flex-col max-sm:items-center justify-center gap-[2%]'>
        <a href='mailto:pankaj.kumar.phe21@itbhu.ac.in' className='bg-white hover:border-2 hover:border-black max-sm:text-xl max-sm:w-[95%] text-2xl py-5 px-10 rounded-md max-sm:mb-[20px]'>
          Mail me at: pankaj.kumar.phe21@itbhu.ac.in
        </a>
        <a target='_blank' href='https://drive.google.com/file/d/18ienx3WJmQKw5E1SobzMeqAaBkKR5VNX/view' className='bg-white hover:border-2 hover:border-black text-2xl py-5 px-10 max-sm:text-xl rounded-md'>
          Download Resume
        </a>
      </div>
      </div>
      <div className='flex flex-col items-center mt-[40px]'>
        <div className='flex max-sm:flex-col max-sm:w-[80%] gap-[50px]'>
        <div className='flex justify-center gap-[40px]'>
        <a href="tel:+917751016519" className="h-[86px] w-[96px] text-white hover:scale-105 border-2 rounded-lg flex flex-col items-center">
              <IoMdCall className="mt-[16px] text-[24px]" />
              <a href="tel:+917751016519" className="mt-[9px] text-sm">Fix A Call</a>
            </a>
            <a href="https://github.com/pankajkumarphe21" target='_blank' className="h-[86px] w-[96px] text-white hover:scale-105 border-2 rounded-lg flex flex-col items-center">
              <FaGithub className="mt-[16px] text-[24px]" />
              <a href="https://github.com/pankajkumarphe21" target='_blank' className="mt-[9px] text-sm">Github</a>
            </a>
        </div>
        <div className='flex justify-center gap-[40px]'>
            <a href="https://www.linkedin.com/in/pankaj-kumar-81bb84229/" target='_blank' className="h-[86px] w-[96px] text-white hover:scale-105 border-2 rounded-lg flex flex-col items-center">
              <FaLinkedin className="mt-[16px] text-[24px]" />
              <a href="https://www.linkedin.com/in/pankaj-kumar-81bb84229/" target='_blank' className="mt-[9px] text-sm">LinkedIn</a>
            </a>
            <a href="https://www.instagram.com/pankaj_2002_22/" target='_blank' className="h-[86px] w-[96px] text-white hover:scale-105 border-2 rounded-lg flex flex-col items-center">
              <BsInstagram className="mt-[16px] text-[24px]" />
              <a target='_blank' className="mt-[9px] text-sm">Instagram</a>
            </a>
            </div>
            <div className='flex justify-center mb-[30px]'>
            <a href="https://x.com/pankaj3k3" target='_blank' className="h-[86px] w-[96px] text-white hover:scale-105 border-2 rounded-lg flex flex-col items-center">
              <FaTwitter className="mt-[16px] text-[24px]" />
              <a target='_blank' className="mt-[9px] text-sm">(X)</a>
            </a>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contact