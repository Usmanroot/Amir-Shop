import React from 'react'
import Logo from '../assets/Logo.png'

export default function Header() {
    return (
        <div className='bg-linear-to-r from-[#5fa3e3] to-blue-800 flex gap-[150px] items-center justify-between p-[150px] h-[1300px]'>
            <div className='max-w-[1000px] p-[25px] bg-white rounded-[50px] transiton-all duration-300 hover:scale-110'>
                <h1 className='text-center text-[60px] font-bold'>Who are we?</h1>
                <p className='text-center text-[30px] max-w-[850px] opacity-50'>We're a small chip and drink delivery service that only delivers to the Target Yunusabat school, and we're not entirely legal, as we don't yet have any license to deliver food to schools. Now, on the plus side, our products are the same price as on the street, or even cheaper, and we also have some items that are hard to find in regular stores (our ice tea is very cheap).</p>
            </div>
            <div className='bg-red-500 rounded-[50px]'>
                <div className='bg-white rounded-[50px] shadow-lg/30 rotate-6 transition-all duration-300 hover:rotate-12'>
                    <img src={Logo} alt="logo" className='w-[900px]' />
                </div>
            </div>
        </div>
    )
}
