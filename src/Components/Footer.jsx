import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div id='footer' className='mt-[20px] sm:hidden mb-[20px]'>
      <div className="h-[1px] w-[100%] bg-white mb-[20px]"></div>
      <div className="flex">
      <div className='w-[50%] flex flex-col ml-[70px] text-sm gap-[12px]'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/education'>Education</Link>
        <Link to='/skills'>Skill</Link>
        <Link to='/projects'>Project</Link>
        <Link to='/experience'>Experience</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <div className='w-[50%] flex flex-col gap-[12px] text-sm'>
        <a target='_blank' href="https://www.linkedin.com/in/pankaj-kumar-81bb84229/">LinkedIn</a>
        <a target='_blank' href="https://github.com/pankajkumarphe21">Github</a>
        <a target='_blank' href="https://www.instagram.com/pankaj_2002_22/">Instagram</a>
        <a target='_blank' href="https://x.com/pankaj3k3">X</a>
      </div>
      </div>
    </div>
  )
}

export default Footer