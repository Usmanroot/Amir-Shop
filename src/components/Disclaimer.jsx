import React from 'react'
import Author from '../assets/Author.png'

export default function Disclaimer() {
    return (
        <div className='mt-[80px]'>
            <div className='flex items-center gap-[80px] p-[100px] w-full h-[1000px] ml-auto mr-auto bg-linear-to-l from-red-500 to-[#f7a60f]'>
                <div className='text-center bg-white p-[80px] rounded-[20px]'>
                    <h1 className='text-[50px] font-black text-red-500'>Warning!</h1>
                    <p className='text-[20px] font-black'>We sell and deliver goods only to students or teachers located at the <span className='text-bold text-red-500'> Target Yunusabad branch </span> We do not serve those located at other Target branches or outside the Target Yunusabad zone. We also do not accept liability if you are caught in class purchasing or using goods from this service, so I advise you to think twice before doing so.</p>
                </div>
                <img src={Author} alt="The photo of an Author" className='w-[800px] h-[800px] transition-all duration-300 hover:scale-110'/>
            </div>
        </div>
    )
}
