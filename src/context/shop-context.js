import { createContext, useState } from "react";
import produtos from "../produtos.json";
export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < produtos.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const ShopContextProvider = ({ children }) => {
  const [cart, setCart] = useState(getDefaultCart());
  const addToCart = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  console.log(cart);
  const getTotalCarrinho= () => {
    let totalAmount = 0
    for (const item in cart) {
      if (cart[item] > 0) {
        let itemInfo = produtos.find(produto => produto.id === Number(item))
        totalAmount += cart[item] * itemInfo.valor
      }
    }

    return totalAmount
  }
  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    getTotalCarrinho
  };
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
