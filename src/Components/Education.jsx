import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useState } from 'react'
import styles from  './education.module.css'

const Education = () => {
  useGSAP(()=>{
    gsap.from("#eduaction",{
      opacity:0,
      duration:1,
      y:30
    })
  })
  const High_School=()=>(
    <div id='hs' className='bg-[#202020] shadow-2xl mt-[35px] absolute left-[860px] h-[290px] rounded-[20px] p-9 w-[340px] max-sm:mt-[300px] max-sm:left-[20px]'>
      <h1 className='text-3xl font-bold'>High School</h1>
      <h2 className='mt-[10px] text-md'>DAV Public School</h2>
      <h3 className={`mt-[8px] text-lg ${styles.co}`}>Kansbahal, Sundergarh, Odisha</h3>
      <h4 className='mt-[6px] font-bold text-2xl'>Percentage: 92.8%</h4>
      <h4 className='mt-[10px] font-semibold'>Subjects :- Maths, Science, English, Hindi, Social Science</h4>
    </div>
  )
  const Intermediate=()=>(
    <div id='im' className='bg-[#202020] shadow-2xl mt-[35px] absolute left-[860px] h-[290px] rounded-[20px] p-9 w-[340px] max-sm:mt-[300px] max-sm:left-[20px]'>
      <h1 className='text-3xl font-bold text-blue-500'>Intermediate</h1>
      <h2 className='mt-[10px] text-md'>DAV Public School</h2>
      <h3 className={`mt-[8px] text-lg ${styles.co}`}>Kansbahal, Sundergarh, Odisha</h3>
      <h4 className='mt-[6px] font-bold text-2xl'>Percentage: 94.8%</h4>
      <h4 className='mt-[10px] font-semibold'>Subjects :- Maths, Science, English, Hindi, Social Science</h4>
    </div>
  )
  const High_School1=()=>(
    <div id='hs' className='bg-[#202020] max-sm:left-[25px] shadow-2xl mt-[35px] absolute left-[90px] h-[290px] rounded-[20px] p-9 w-[340px]'>
      <h1 className='text-3xl font-bold'>High School</h1>
      <h2 className='mt-[10px] text-md'>DAV Public School</h2>
      <h3 className={`mt-[8px] text-lg ${styles.co}`}>Kansbahal, Sundergarh, Odisha</h3>
      <h4 className='mt-[6px] font-bold text-2xl'>Percentage: 92.8%</h4>
      <h4 className='mt-[10px] font-semibold'>Subjects :- Maths, Science, English, Hindi, Social Science</h4>
    </div>
  )
  const Intermediate1=()=>(
    <div id='im' className='bg-[#202020] max-sm:left-[25px] max-sm:mt-[400px] shadow-2xl mt-[35px] absolute left-[475px] h-[290px] rounded-[20px] p-9 w-[340px]'>
      <h1 className='text-3xl font-bold text-blue-500'>Intermediate</h1>
      <h2 className='mt-[10px] text-md'>DAV Public School</h2>
      <h3 className={`mt-[8px] text-lg ${styles.co}`}>Kansbahal, Sundergarh, Odisha</h3>
      <h4 className='mt-[6px] font-bold text-2xl'>Percentage: 94.8%</h4>
      <h4 className='mt-[10px] font-semibold'>Subjects :- Maths, Science, English, Hindi, Social Science</h4>
    </div>
  )
  const Current1=()=>(
    <div id='cu' className='bg-[#202020] max-sm:left-[25px] max-sm:mt-[800px] shadow-2xl mt-[35px] absolute left-[860px] h-[290px] rounded-[20px] p-8 w-[340px]'>
      <h1 className='text-3xl font-bold text-blue-500'>Bachelor of Technology</h1>
      <h2 className=' mt-[16px]'>Indian Institute of Technology, Varanasi</h2>
      <h4 className='text-lg font-medium mt-[10px]'>CGPA :- 7.28</h4>
      <h4 className=' mt-[10px]'>Branch - Pharmaceutical Engineering and Technology</h4>
    </div>
  )
  const Current=()=>(
    <div id='cu' className='bg-[#202020] shadow-2xl mt-[35px] absolute left-[860px] h-[290px] rounded-[20px] p-8 w-[340px] max-sm:mt-[300px] max-sm:left-[20px]'>
      <h1 className='text-3xl font-bold text-blue-500'>Bachelor of Technology</h1>
      <h2 className=' mt-[16px]'>Indian Institute of Technology, Varanasi</h2>
      <h4 className='text-lg font-medium mt-[10px]'>CGPA :- 7.71</h4>
      <h4 className=' mt-[10px]'>Branch - Pharmaceutical Engineering and Technology</h4>
    </div>
  )
  const general=()=>(
    <div id='gen' className='bg-[#202020] shadow-2xl text-lg font-medium text-orange-400 absolute max-sm:left-[20px] max-sm:mt-[390px] left-[860px] mt-[120px] h-[90px] rounded-[20px] w-[340px] p-[12px]'>
      <div className=' flex justify-center items-center'><p className='w-[80%]'>Hover on the dots in between to explore full</p></div>
    </div>
  )
  const [render,setRender]=useState([general]);
  const [t,setT]=useState(true)
  const handleClick=()=>{
    document.getElementById('timeline').classList.toggle('hidden')
    document.getElementById('btn').classList.toggle('max-sm:mt-[100px]')
    document.getElementById('btn').classList.toggle('max-sm:mt-[650px]')
    if(t){
      setRender([High_School1,Intermediate1,Current1]);
      setT(!t)
    }
    else{
      setRender([general])
      setT(!t)
    }
  }
  return (
    <div id='eduaction' className={`mt-[60px] relative ${render.length==1 ? 'max-sm:mb-[800px]': 'max-sm:mb-[1300px]'} `}>
      <h1 className='mt-[100px] max-sm:text-[28px] text-[2.45rem] w-[100%] flex justify-center text-orange-400 tracking-wide font-medium'>My Education</h1>
      <h3 className={`text-xl max-sm:text-[16px] w-[100%] flex justify-center ${styles.co}`}>Here is a quick Timeline of my educational journey</h3>
      <div className="absolute max-sm:ml-[20px] ml-[120px] mt-[70px]">
      <div id='timeline' className="absolute w-[100%]">
      <div className='w-[680px] max-sm:w-[340px] h-[2px] bg-white absolute mt-[100px]'></div>
      <div className="absolute ml-[100px] max-sm:ml-[30px]">
        <div className="flex flex-col items-center">
        <p>2019</p>
        <div className='h-[68px] w-[2px] bg-white'></div>
        <div onMouseOut={()=>(setRender([general]))} onMouseOver={()=>{setRender([High_School])}} className='h-[7px] w-[7px] bg-white mt-[5px] rounded-[50%]'></div>
        <div className='h-[68px] w-[2px] bg-white mt-[5px]'></div>
        <p>High School</p>
        </div>
      </div>
      <div className="absolute ml-[280px] max-sm:ml-[120px]">
        <div className="flex flex-col items-center">
        <p>2021</p>
        <div className='h-[68px] w-[2px] bg-white'></div>
        <div onMouseOut={()=>(setRender([general]))} onMouseOver={()=>{setRender([Intermediate])}} className='h-[7px] w-[7px] bg-white mt-[5px] rounded-[50%]'></div>
        <div className='h-[68px] w-[2px] bg-white mt-[5px]'></div>
        <p>Intermediate</p>
        </div>
      </div>
      <div className="absolute ml-[495px] max-sm:ml-[250px]">
        <div className="flex flex-col items-center">
        <p className='w-[62px] flex justify-center'>{"  2025  "}</p>
        <div className='h-[68px] w-[2px] bg-white'></div>
        <div onMouseOut={()=>(setRender([general]))} onMouseOver={()=>{setRender([Current])}} className='h-[7px] w-[7px] bg-white mt-[5px] rounded-[50%]'></div>
        <div className='h-[68px] w-[2px] bg-white mt-[5px]'></div>
        <p>B. Tech</p>
        </div>
      </div>
      </div>
      </div>
      {
        render.map((Val,i)=>(
          <div key={i} className='absolute'>
            <Val/>
          </div>
        ))
      }
      <div className='absolute max-sm:top-[600px] top-[440px] pb-[100px]'>
        <button id='btn' onClick={()=>{handleClick()}} className='bg-[#2A2A2A] max-sm:mt-[100px] ml-[120px] shadow-lg p-2 '>
          {
            !t ? 'Back' : 'Read Full Timeline'
          }
        </button>
      </div>
    </div>
  )
}

export default Education