import React from 'react'
import {projects} from './../Components/Projects'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateIndex } from '../features/project/projectSlice'


const Card=({projects,index})=>{
  const dispatch=useDispatch()
  return (
    <div className='rounded-sm hover:scale-102 relative bg-no-repeat h-[246px] w-[376px]'>
    <div className='absolute -z-10 top-0 bg-zinc-800 opacity-40 h-[246px] w-[376px] '>
      <img src={`${projects.image}`} alt="" />
    </div>
    <div className='absolute font-extrabold top-0 h-[226px] w-[372px] flex flex-col justify-center items-center'>
    <p>{projects.heading}</p>
    <Link to='/singleProject' onClick={()=>{dispatch(updateIndex(index))}} className='mt-[6px] h-[26px] w-[160px] rounded-lg font-light flex justify-center items-center border-[1px]'>Click to see Details</Link>
    </div>
  </div>
  )
}

const Highlights = () => {
  return (
    <div className='w-[100%] z-0 flex justify-center items-center mt-[60px] pb-[120px]'>
      <div className='flex flex-col w-[90%] justify-center items-center'>
      <p className='text-3xl font-bold mb-[30px]'>PortFolio Highlights</p>
      <div className='flex flex-wrap justify-center items-center gap-[50px]'>
    {
      projects.slice(0,4).map((val,i)=>{
        return (
          <Card key={i} projects={val} index={i}/>
        )
      })
    }
      </div>
    </div>
    </div>
  )
}

export default Highlights