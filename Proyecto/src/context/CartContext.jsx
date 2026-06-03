import React, { useState, useContext, createContext, Children } from "react";

export const CartContext = createContext();

//custom hook o hook personalizado
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    //si el producto existe
    const itemInCart = cart.find((item) => item.id === product.id);
    if (itemInCart) {
      const updateCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item,
      );
      setCart(updateCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  }

  const getCartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0); //acc = accumulator
  }

  const getCartTotal = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.precio, 0); //acc = accumulator
  }

  return (
    <CartContext.Provider
      value={{ cart, useCart, addToCart, clearCart, getCartQuantity, getCartTotal }}>
      {children}
    </CartContext.Provider>
  )
};
