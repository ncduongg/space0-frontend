import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
export const CartContext = React.createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    try {
      const storedCart = JSON.parse(Cookies.get("cart"));
      if (storedCart) {
        setCart(storedCart);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  useEffect(() => {
    if (cart.length > 0) {
      Cookies.set("cart", JSON.stringify(cart), { expires: 7 });
    }
  }, [cart]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
