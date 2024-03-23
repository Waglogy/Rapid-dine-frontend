import React from 'react'

const Header = () => {
  return (
    <div className='flex max-w-xl h-40 text-white bg-[#A80303] justify-around rounded-xl overflow-hidden mx-auto mt-20'>
      <div className='max-w-[8rem] m-auto'>
        <img src="\cutlary.svg" alt="" className='max-w-[7rem] m-auto '/>
      </div>
      <div className='text-[#F1E4C1]  text-right px-5 flex flex-col items-end justify-center'>
        <p className='text-3xl font-extrabold'>Savor the Art of Flavor !</p>
        <p className='text-sm'>Where Every Bite is a Wag-tastic Adventure</p>
        
        <button className='bg-[#F1E4C1] text-black font-bold p-1 rounded-lg mt-2'>order now</button>
      </div>
    </div>
  )
}

export default Header