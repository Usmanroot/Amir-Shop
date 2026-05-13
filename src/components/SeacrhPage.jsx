import React from 'react'
import { useLocation } from 'react-router-dom'
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

export default function SeacrhPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const allItems = Object.values(productsData).flat();
  const filteredItems = allItems.filter(item =>
    item.name.toLowerCase().includes(query?.toLowerCase())
  )

  const images = {
    "Nachos_purple": Nachos_purple,
    "Nachos_green": Nachos_green,
    "Nachos_orange": Nachos_orange,
    "Cheers_blue": Cheers_blue,
    "Cheers_brown": Cheers_brown,
    "Cheetos_normal": Cheetos_normal,
    "CocaCola05": CocaCola05,
    "Pepsi05": Pepsi05,
    'Sprite05': Sprite05,
    "Pepsi15": Pepsi15,
    "CocaCola15": CocaCola15,
    "Hydrolife05": Hydrolife05
  }


  return (
    <div className='max-w-[1800px] mx-auto p-[30px]'>
      <h1 className='text-4xl text-center font-bold mb-10'>Search results for: "{query}"</h1>

      <div className='grid grid-cols-3 gap-6 gap-y-[100px] justify-items-center'>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Cards key={item.id} product={{
              ...item,
              image: images[item.image] || item.image
            }} />
          ))
        ) : (
          <p className='text-2xl'>Nothing found, Try another product!</p>
        )}
      </div>
    </div>
  )
}
