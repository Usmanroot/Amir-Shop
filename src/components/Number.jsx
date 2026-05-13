import React from 'react'

export default function Number() {
  return (
    <div className='flex flex-col gap-y-[100px] mt-[50px]'>
      <h1 className='text-[50px] text-center font-bold'>If you have any complaints or questions, you can contact us.</h1>
      <div className='flex items-center justify-around'>
        <div className='w-[560px] h-[300px] p-[10px] flex flex-col gap-y-[30px] shadow-md/30'>
          <h1 className='text-[60px] font-bold'>Sellers phone number</h1>
          <p className='text-[30px] opacity-55 text-center font-black'>+998 90 331 86 96</p>
        </div>
        <div className='w-[560px] h-[300px] p-[10px] flex flex-col gap-y-[30px] shadow-md/30'>
          <h1 className='text-[60px] font-bold'>Web Site manager phone number</h1>
          <p className='text-[30px] opacity-55 text-center font-black'>+998 97 809 84 39</p>
        </div>
      </div>
    </div>
  )
}
