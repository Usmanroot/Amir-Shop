import React from 'react'
import productsData from '../product.json'
import Nachos_purple from '../assets/Nachos_purple.png'
import Nachos_green from '../assets/Nachos_green.png'
import Nachos_orange from '../assets/Nachos_orange.png'
import Swiper from '../components/ProductSlider.jsx'
import Cards from '../components/Cards.jsx'
import Disclaimer from '../components/Disclaimer.jsx'
import Order from '../components/Order.jsx'

export default function Home() {
  const images = {
    "Nachos_purple": Nachos_purple,
    "Nachos_green": Nachos_green,
    "Nachos_orange": Nachos_orange
  }

  const featuredChips = productsData.chips.slice(0, 3);

  return (
    <div>
      <Swiper />
      
      <div className='max-w-[1800px] mx-auto'>
        <h2 className='text-4xl font-bold mt-10 text-center uppercase'>popular products</h2>
        
        <div className='grid grid-cols-3 gap-6 gap-y-[100px] justify-items-center p-[25px] mt-10'>
          {featuredChips.map((item) => (
            <Cards
              key={item.id}
              product={{
                ...item,
                image: images[item.image] || item.image
              }}
            />
          ))}
        </div>
      </div>

      <Disclaimer />
      <Order/>
    </div>
  )
}