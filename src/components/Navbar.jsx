import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import Cart from '../assets/Cart.svg'

export default function Navbar() {
    const [searchTherm, setSearchTherm] = useState('')
    const navigate = useNavigate();

    const activeStyle = ({ isActive }) =>
        isActive ? 'text-red-500 text-[35px] font-bold' : 'text-black text-[30px] font-bold opacity-[60px] font-sans'


    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTherm.trim()) {
            navigate(`/search?q=${searchTherm}`);
            setSearchTherm('')
        }
    }
    return (
        <div className='flex items-center justify-between p-10 shadow-md/10'>
            <div className='flex items-center gap-[40px] text-[]'>
                <img src={Logo} alt="Logo" className='w-[100px]' />
                <p className='text-[30px] text-[#5fa3e3]'>Target -<dir className='text-red-500'>AmirShop</dir> </p>
            </div>
            <div className='flex items-center gap-10'>
                <NavLink to="/" className={activeStyle}>Home</NavLink>
                <NavLink to="/category" className={activeStyle}>Category</NavLink>
                <NavLink to="/about" className={activeStyle}>About us</NavLink>
                <NavLink to="/contact" className={activeStyle}>Contact us</NavLink>
            </div>
            <form onSubmit={handleSearch} className='flex items-center'>
                <input value={searchTherm} onChange={(e) => setSearchTherm(e.target.value)} placeholder='Snaks :)' type="text" className=' border-[3px] border-r-0  rounded-r-none rounded-[50px] p-[12px] pl-[30px] text-[30px]' />
                <button type='submit' className='bg-[#e31919] text-[#ffff] text-[20px] border-[3px] border-[#e31919] p-[20px] rounded-r-[50px] transition-all duration-300 hover:text-[#e31919] hover:border-[3px] hover:border-[#e31919] hover:bg-white cursor-pointer'>Search</button>
            </form>
            <div>
                <NavLink to='/cart'>
                    <img src={Cart} alt="just cart" className='w-[50px] cursor-pointer' />
                </NavLink>
            </div>
        </div>
    )
}
