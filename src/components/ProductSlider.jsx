import React from 'react'
import Maxfun_cookie from '../assets/Maxfun_cookie.png'
import Alpengold from '../assets/Alpengold.png'
import Lipton from '../assets/Lipton.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function ProductSlider() {
  const slides = [
    { id: 1, bgGradient: 'from-orange-400 to red-500', image: Maxfun_cookie, title: 'IMB PROMOTION, COOKIES PLUS 4 FIZZIES FOR 6 THOUSAND SUM' },
    { id: 2, bgGradient: 'from-purple-500 via-pink-500 to-red-500', image: Alpengold, title: 'THE PROMOTION IS EVEN BETTER: A RANDOM ALPENGOLD BAR PLUS 4 CANDY BAR FOR 18 THOUSAND' },
    { id: 3, bgGradient: 'from-green-400 to blue-500', image: Lipton, title: 'OH MY GOD WHAT A PROMOTION, 2 RANDOM LIPTONS FOR ONLY 30 THOUSAND SUM' }
  ]
  return (
    <div className='w-full px-4 py-6'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        navigation={true}
        className='rounded-[20px] h-[200px] md:h-[450px] flex overflow-hidden'>
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className='bg-white'>
            <div className={`flex flex-col md:flex-row items-center justify-between w-full h-full p-6 md:p-12 bg-linear-to-r ${slide.bgGradient}`}>
              <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left order-2 md:order-1">
                <h2 className="text-[20px] md:text-[32px] font-black leading-tight text-[#ffff] uppercase italic">
                  {slide.title}
                </h2>
              </div>
              <div className="w-full md:w-1/2 h-[150px] md:h-[300px] flex items-center justify-center order-1 md:order-2">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="max-w-full max-h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
