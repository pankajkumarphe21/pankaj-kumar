import React from 'react'

const Highlights = () => {
  return (
    <div className='w-[100%] z-0 flex justify-center items-center mt-[60px] pb-[120px]'>
      <div className='flex flex-col w-[90%] justify-center items-center'>
      <p className='text-3xl font-bold mb-[30px]'>PortFolio Highlights</p>
      <div className='flex flex-wrap justify-center items-center gap-[50px]'>
        <div className="bg-[url('/spirit.png')] rounded-sm relative bg-no-repeat h-[246px] w-[434px]">
          <div className='absolute top-0 bg-zinc-800 opacity-80 h-[246px] w-[434px] '>
            
          </div>
          <div className='absolute font-extrabold top-0 h-[246px] w-[434px] flex flex-col justify-center items-center'>
          <p>Spirit Website</p>
          <div className='mt-[6px] h-[26px] w-[160px] rounded-lg font-light flex justify-center items-center border-[1px]'>Click to see Details</div>
          </div>
        </div>
        <div className="bg-[url('/Genome.png')] rounded-sm relative bg-no-repeat h-[246px] w-[434px]">
          <div className='absolute top-0 bg-zinc-800 opacity-80 h-[246px] w-[434px] '>
            
          </div>
          <div className='absolute font-extrabold top-0 h-[246px] w-[434px] flex flex-col justify-center items-center'>
          <p>Genome Diagnosis</p>
          <div className='mt-[6px] h-[26px] w-[160px] rounded-lg font-light flex justify-center items-center border-[1px]'>Click to see Details</div>
          </div>
        </div>
        <div className="bg-[url('/note.png')] rounded-sm relative bg-no-repeat h-[246px] w-[434px]">
          <div className='absolute top-0 bg-zinc-800 opacity-80 h-[246px] w-[434px] '>
            
          </div>
          <div className='absolute font-extrabold top-0 h-[246px] w-[434px] flex flex-col justify-center items-center'>
          <p>Notes App</p>
          <div className='mt-[6px] h-[26px] w-[160px] rounded-lg font-light flex justify-center items-center border-[1px]'>Click to see Details</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Highlights