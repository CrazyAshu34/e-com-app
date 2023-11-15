import React, { createContext, useState, useEffect } from "react";

import all_product from "../components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {}; // Ek khali object banaya
  for (let i = 0; i < all_product.length + 1; i++) {
    cart[i] = 0; // Har index ko 0 ke saath set kiya
  }
  return cart;
}; // {0: 0, 1: 0, 2: 0, ...and so on 36: 0} output look like


const getStoredCart = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : getDefaultCart();
};


const ShopContextProvider = (props) => {
  const [CurrentCartState, setCurrentCartState] = useState(getStoredCart());

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(CurrentCartState));
  }, [CurrentCartState]);

  const addToCart = (offerId) => {
    setCurrentCartState((prev) => ({ ...prev, [offerId]: prev[offerId] + 1 }))
    // setCurrentCartState((prev) => ({ ...0-36, [13]: 0-36[13] + 1 }))
    console.log(CurrentCartState);
  }

  const removeToCart = (offerId) => {
    setCurrentCartState((prev) => ({ ...prev, [offerId]: prev[offerId] - 1 }))

  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in CurrentCartState) {
      if (CurrentCartState[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item))
        totalAmount += itemInfo.new_price * CurrentCartState[item];
      }
    }
    return totalAmount; // Move this line outside of the loop
  }
  
  const getTotalCartItems = () =>{
    let totalItem = 0;
    for(const item in CurrentCartState){
      if(CurrentCartState[item]>0){
          totalItem += CurrentCartState[item];
      }
    }
    return totalItem;
  }

  const mydata = {getTotalCartItems, getTotalCartAmount, all_product, addToCart, CurrentCartState, removeToCart };

  return (
    <ShopContext.Provider value={mydata}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
