import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, amount) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      
      if (amount === 0) {
        return prevCart.filter((item) => item.id !== product.id);
      }

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: amount } : item
        );
      }

      return [...prevCart, { ...product, quantity: amount }];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);