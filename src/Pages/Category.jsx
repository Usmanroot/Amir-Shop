import React from 'react'
import Cards from '../components/Cards.jsx'
import productsData from '../product.json'
import Nachos_purple from '../assets/Nachos_purple.png'
import Nachos_green from '../assets/Nachos_green.png'
import Nachos_orange from '../assets/Nachos_orange.png'
import Cheers_blue from '../assets/Cheers_blue.png'
import Cheers_brown from '../assets/Cheers_brown.png'
import Cheetos_normal from '../assets/Cheetos_normal.png'
import CocaCola05 from '../assets/CocaCola05.png'
import Pepsi05 from '../assets/Pepsi05.png'
import Sprite05 from '../assets/Sprite05.png'
import Pepsi15 from '../assets/Pepsi15.png'
import CocaCola15 from '../assets/CocaCola15.png'
import Hydrolife05 from '../assets/Hydrolife05.png'

export default function Category() {

  const images = {
    "Nachos_purple": Nachos_purple,
    "Nachos_green": Nachos_green,
    "Nachos_orange": Nachos_orange,
    "Cheers_blue": Cheers_blue,
    "Cheers_brown": Cheers_brown,
    "Cheetos_normal": Cheetos_normal,
    "CocaCola05": CocaCola05,
    "Pepsi05": Pepsi05,
    "Sprite05": Sprite05,
    "Pepsi15": Pepsi15,
    "CocaCola15": CocaCola15,
    "Hydrolife05": Hydrolife05

  }
  return (
    <div className='max-w-[1800px] mx-auto p-[30px]'>
      {Object.entries(productsData).map(([categoryName, items]) => (
        <div key={categoryName} className='mb-20'>
          <h2 className='text-4xl font-bold mb-10 text-center uppercase'>{categoryName}</h2>
          <div className='grid grid-cols-3 gap-6 gap-y-[100px] justify-items-center'>
            {items.map((item) => (
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
      ))}
    </div>
  )
} 