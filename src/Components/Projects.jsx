import React,{useState} from 'react'

const Projects = () => {
  const [projects,setProjects]=useState([
    {
      heading:'Spirit IIT BHU',
      image:'/w1.png'
    },
    {
      heading:'Genome Diagnosis',
      image:'/w2.png'
    },
    {
      heading:'Notes App',
      image:'/w3.png'
    }
  ])
  const Card=(val,i)=>{
    return (
      <div key={i} className='flex flex-col h-[231px] w-[376px] justify-between'>
          <img className='animate' src={val.val.image} alt="" />
          <p className='flex justify-center'>{val.val.heading}</p>
        </div>
    )
  }
  return (
    <div className='w-[100%] flex justify-center items-center mb-[100px]'>
    <div className='mt-[60px] w-[80%] flex flex-col justify-center items-center'>
      <h1 className='text-4xl my-[20px] text-orange-400'>Project Area</h1>
      <div className='flex flex-wrap gap-[160px] justify-center'>
        {
          projects.map((value,i)=>{
            return (
              <Card key={i} val={value}/>
            )
          })
        }
      </div>
    </div>
    </div>
  )
}

export default Projects