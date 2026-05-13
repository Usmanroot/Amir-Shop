import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Category from './Pages/Category.jsx'
import Contact from './Pages/Contact.jsx'
import SeacrhPage from './components/SeacrhPage.jsx'
import CartPage from './components/CartPage.jsx'

export default function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/category' element={<Category />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/search' element={<SeacrhPage />} />
              <Route path='/cart' element={<CartPage />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}
