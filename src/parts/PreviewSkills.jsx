import React, { useEffect, useState } from 'react'

const previewSkills = () => {
  const Card=({value})=>(
    <div className='border-2 border-white text-orange-500 rounded-[50%] flex justify-center items-center h-[100px] w-[130px]'>
      {value}
    </div>
  )
  const skills=['ReactJS','Node.js','Express.js','Mongoose','C++','C','JavaScript','Python','HTML','CSS','Excel','Github','Git','VSCode']
  return (
    <div className='flex justify-center'>
      <div className='mt-[20px] w-[80%] flex flex-col justify-center items-center'>
      <h1 className='mb-[30px] text-3xl font-semibold'>SkillSet Overview</h1>
      <div className='flex gap-5 flex-wrap'>
        {
          skills.map((val,i)=>{
            return (
              <Card key={i} value={val}/>
            )
          })
        }
      </div>
    </div>
    </div>
  )
}

export default previewSkills