import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const skills={
  programming_language:[
    {
      language:'C',
      image:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
    },
    {
      language:'C++',
      image:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
    },
    {
      language:'Python',
      image:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
      language:'JavaScript',
      image:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    }
  ],
  frameworks_libraries:[
    {
      language:'React Js',
      image:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      language:'Node Js',
      image:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      language:'Express Js',
      image:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },
    {
      language:'Tailwind CSS',
      image:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
    }
  ],
  database_tools_language:[
    {
      language:'MongoDB',
      image:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    {
      language:'MySQL',
      image:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
      language:'Excel',
      image:'https://shivam-prajapati.vercel.app/skillImages/excellogo.svg'
    }
  ],
  vct_ide:[
    {
      language:'Git',
      image:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      language:'Github',
      image:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
    },
    {
      language:'VS Code',
      image:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
    }
  ],
  intersets:[
    'Software Development',
    "Full Stack Development",
    'Data Analyst',
    'Data Structure And Algorithm'
  ],
  soft_skills:[
    'Communication',
    'Time Managemnt',
    'Teamwork',
    'Problem Solving'
  ]
}

const Skills = () => {
  useGSAP(()=>{
    gsap.from(".skills",{
      opacity:0,
      y:50,
      duration:0.8
    })
  })
  return (
    <div className='skills mt-[60px] flex flex-col items-center pb-[60px]'>
      <h1 className='mt-[50px] mb-[30px] text-[2.65rem] tracking-wide font-bold'>Skills</h1>
      <div className='flex w-[80%] justify-between max-sm:flex-col'>
      <div className='border-[3px] bg-white hover:scale-[1.02] ease-in-out duration-200 text-black rounded-md border-orange-400 max-sm:mb-[40px] max-sm:p-8 p-16 pt-8 pb-4 font-bold'>
          <p className='mb-[25px] text-lg'>Programming Language</p>
          {
          skills.programming_language.map(({language,image},i)=>{
            return (
              <div className='flex pl-[20px] mb-[10px] items-center w-[350px]' key={i}>
                <img className='h-[40px] mr-[15px]' src={`${image}`}/>{language}
              </div>
            )
          })
        }
        </div>
        <div className='border-[3px] bg-white hover:scale-[1.02] ease-in-out duration-200 text-black rounded-md border-orange-400 p-16 max-sm:p-8 pt-8 pb-7 font-bold'>
          <p className='mb-[25px] text-lg'>Frameworks and Libraries</p>
          {
          skills.frameworks_libraries.map(({language,image},i)=>{
            return (
              <div className='flex pl-[20px] mb-[10px] items-center w-[350px]' key={i}>
                <img className='h-[40px] mr-[15px]' src={`${image}`}/>{language}
              </div>
            )
          })
        }
        </div>
      </div>
      <div className='flex mt-[40px] w-[80%] justify-between max-sm:flex-col'>
      <div className='border-[3px] bg-white hover:scale-[1.02] ease-in-out duration-200 text-black rounded-md border-orange-400 max-sm:mb-[40px] p-16 max-sm:p-8 pt-8 pb-4 font-bold'>
          <p className='mb-[25px] text-lg'>Database, Tools And Language</p>
          {
          skills.database_tools_language.map(({language,image},i)=>{
            return (
              <div className='flex pl-[20px] mb-[10px] items-center w-[350px]' key={i}>
                <img className='h-[40px] mr-[15px]' src={`${image}`}/>{language}
              </div>
            )
          })
        }
        </div>
        <div className='border-[3px] bg-white hover:scale-[1.02] ease-in-out duration-200 text-black rounded-md border-orange-400 p-16 max-sm:p-8 pt-8 pb-7 font-bold'>
          <p className='mb-[25px] text-lg'>Version Control Tools and IDE</p>
          {
          skills.vct_ide.map(({language,image},i)=>{
            return (
              <div className='flex pl-[20px] mb-[10px] items-center w-[350px]' key={i}>
                <img className='h-[40px] mr-[15px]' src={`${image}`}/>{language}
              </div>
            )
          })
        }
        </div>
      </div>
      <div className='flex mt-[40px] w-[80%] justify-between max-sm:flex-col'>
      <div className='border-[3px] bg-white hover:scale-[1.02] ease-in-out duration-200 text-black rounded-md border-orange-400 max-sm:mb-[40px] max-sm:p-8 p-16 pt-8 pb-4'>
          <p className='mb-[25px] text-lg font-bold'>Interests</p>
          {
          skills.intersets.map((val,i)=>{
            return (
              <div className='flex pl-[20px] mb-[10px] items-center w-[350px]' key={i}>
                {val}
              </div>
            )
          })
        }
        </div>
        <div className='border-[3px] bg-white hover:scale-[1.02] ease-in-out duration-200 text-black rounded-md border-orange-400 p-16 max-sm:p-8 pt-8 pb-7'>
          <p className='mb-[25px] text-lg font-bold'>Soft Skills</p>
          {
          skills.soft_skills.map((val,i)=>{
            return (
              <div className='flex pl-[20px] mb-[10px] items-center w-[350px]' key={i}>
                {val}
              </div>
            )
          })
        }
        </div>
      </div>
      <div className='flex justify-center mb-[30px] mt-10 items-center'>
        <a href="https://leetcode.com/u/pank2763/" target='_blank' className="h-[80px] w-[166px] text-white hover:scale-105 border-2 rounded-lg flex flex-col items-center">
        <img className='h-[30px] mt-2' src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png" alt="" />
          <span className="mt-[9px] text-sm">Leetcode profile</span>
        </a>
      </div>
    </div>
  )
}

export default Skills