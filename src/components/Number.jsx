import React from 'react'

export default function Number() {
  return (
    <div className='flex flex-col gap-y-[100px] bg-linear-to-r from-[#323ea8] to-[#7f32a8] p-[50px]'>
      <h1 className='text-[50px] text-[#5fa3e3] text-center font-bold'>If you have any complaints or questions, you can contact us.</h1>
      <div className='flex items-center justify-around'>
        <div className='w-[860px] h-[400px] p-[10px] flex flex-col gap-y-[100px] shadow-md/30 bg-[#ffff] rounded-[20px] transition-all duration-300 hover:scale-110 hover:border-8 hover:border-[#5fa3e3]'>
          <h1 className='text-[60px] text-center font-bold'>Sellers phone number</h1>
          <p className='text-[40px] opacity-55 text-center font-black'>+998 90 331 86 96</p>
        </div>
        <div className='w-[860px] h-[400px] p-[10px] flex flex-col gap-y-[100px] shadow-md/30 bg-[#ffff] rounded-[20px] transition-all duration-300 hover:scale-110 hover:border-8 hover:border-[#5fa3e3]'>
          <h1 className='text-[60px] text-center font-bold'>Web Site manager phone number</h1>
          <p className='text-[40px] opacity-55 text-center font-black'>+998 97 809 84 39</p>
        </div>
      </div>
    </div>
  )
}
