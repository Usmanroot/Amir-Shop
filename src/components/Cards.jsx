import React from 'react'
import { useCart } from '../context/CartContext';
import starSolid from '../assets/star-solid-full.svg'
import starRegular from '../assets/star-regular-full.svg'

export default function Shares({ product }) {
  const { cart, addToCart } = useCart();

  if (!product) return null;

  const cartItem = cart.find(item => item.id === product.id);
  const count = cartItem ? cartItem.quantity : 0;

  const increment = () => {
    addToCart(product, count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      addToCart(product, count - 1);
    }
  };

  return (
    <div className='w-[450px] h-[650px] rounded-[20px] flex flex-col items-center shadow-xl transition-all duration-400 hover:scale-110 hover:shadow-xl/50 hover:shadow-blue-400 bg-white overflow-hidden'>
      <div className="w-full h-[350px] flex items-center justify-center">
        <img 
            src={product.image} 
            alt={product.name} 
            className='w-full h-full object-contain transition-transform duration-300 hover:scale-95' 
        />
      </div>
      <div className='w-full px-[15px] flex flex-col items-center gap-y-2 py-4'>
        <p className='text-[35px] text-center font-medium leading-tight h-[60px] flex items-center justify-center'>
            {product.name}
        </p>
        <p className='text-[24px] opacity-55'>{product.price} so'm</p>
      
        <div className='p-[10px] flex flex-row self-center space-x-2'>
          {[...Array(5)].map((_, i) => (
            <img 
              key={i}
              src={i < product.rating ? starSolid : starRegular} 
              alt="star" 
              className='w-[30px] h-[30px] transition-transform duration-300 hover:scale-150 cursor-pointer' 
            />
          ))}
        </div>
      </div>
      <div className="w-full mt-auto">
        {count === 0 ? (
          <button
            onClick={increment}
            className='w-full h-[75px] rounded-b-[20px] bg-[#5fa3e3] text-white text-[24px] transition-all duration-400 hover:bg-white hover:text-[#5fa3e3] border-[5px] border-transparent hover:border-[#5fa3e3] cursor-pointer'
          >
            Add to cart
          </button>
        ) : (
          <div className='w-full h-[75px] border-[5px] border-[#5fa3e3] rounded-b-[20px] bg-white flex items-center justify-between px-10 text-[#5fa3e3] text-[24px] font-bold'>
            <button onClick={decrement} className='hover:scale-125 transition-transform cursor-pointer'>−</button>
            <span>{count}</span>
            <button onClick={increment} className='hover:scale-125 transition-transform cursor-pointer'>+</button>
          </div>
        )}
      </div>
    </div>
  )
}