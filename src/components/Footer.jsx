import React from 'react'
import Target from '../assets/Target.png'

export default function Footer() {
  return (
    <footer className='w-full bg-[#001029] text-white py-16'>
      <div className='max-w-[1400px] mx-auto px-10 grid grid-cols-1 md:grid-cols-3 gap-12'>

        <div className='flex flex-col gap-4'>
          <img src={Target} alt="Logo" className='w-[150px] brightness-0 invert' />
          <p className='text-gray-400 text-lg leading-relaxed'>
            The best snack shop for your evening get-togethers.
            Time-tested quality, proven by Amir.
          </p>
        </div>

        <div className='flex flex-col gap-4'>
          <h4 className='text-2xl font-bold border-b-2 border-[#e31919] w-fit mb-2'>Navigation</h4>
          <a href="/" className='text-gray-400 hover:text-white transition-colors text-xl'>Home</a>
          <a href="/category" className='text-gray-400 hover:text-white transition-colors text-xl'>Categories</a>
          <a href="/about" className='text-gray-400 hover:text-white transition-colors text-xl'>About Us</a>
        </div>

        <div className='flex flex-col gap-4'>
          <h4 className='text-2xl font-bold border-b-2 border-[#e31919] w-fit mb-2'>We are online</h4>
          <div className='flex flex-col gap-3'>
            <a href="https://www.youtube.com/@TargetEdu" target="_blank" rel="noreferrer"
              className='flex items-center gap-2 text-gray-400 hover:text-[#ff0000] transition-colors text-xl'>
              <span>YouTube</span>
            </a>
            <a href="https://www.instagram.com/targetschool_yunusobod/" target="_blank" rel="noreferrer"
              className='flex items-center gap-2 text-gray-400 hover:text-[#e1306c] transition-colors text-xl'>
              <span>Instagram</span>
            </a>
            <a href="https://t.me/targetschooluz_yunusobod" target="_blank" rel="noreferrer"
              className='flex items-center gap-2 text-gray-400 hover:text-[#0088cc] transition-colors text-xl'>
              <span>Telegram</span>
            </a>
          </div>
        </div>

      </div>

      <div className='border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm'>
        © {new Date().getFullYear()}Target - AmirShop All rights reserved
      </div>
    </footer>
  )
}