import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [service, setService] = useState([]);

  const addToCart = (product) => {
    setService([...service, product]);
  };

  const removeFromCart = (productToRemove) => {
    const updatedservice = service.filter((product) => product !== productToRemove);
    setService(updatedservice);
  };

  return (
    <CartContext.Provider value={{ service, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
