import React, { createContext, useEffect, useState } from "react";
//import { data } from "../data/data.js"

export const ShopContext = createContext(null);

const ShopContextProvider = (itemsForSale) => {

  const [all_products, setAll_Products] = useState([]);

  const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
      cart[index] = 0;
      }
  return cart;
  }

  const[cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
fetch("http://localhost:8000/allproducts") 
.then((res)=> res.json())
.then((data)=>setAll_Products(data))

},[])


  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems) {
      if(cartItems[item] >  0)
      {
       let itemInfo = all_products.find((product)=>product.id===Number(item));
             totalAmount += cartItems[item] * itemInfo.price;
 
              }
    }
    return totalAmount;
  
  }


  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if(cartItems[item]>0){
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }



const addToCart = (itemId) => {
setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
if(localStorage.getItem("auth-token")){
  fetch("http://localhost:8000/addtocart", {
    method: "POST",
    headers: {
      Accept: "application/form-data",
      "auth-token": `${localStorage.getItem("auth-token")}`,
      "Content-Type": "application/json",
    },
  body: JSON.stringify({"itemId":itemId}),
  })
  .then((res)=>res.json())
  .then((data)=>console.log(data))
}
}

const removeFromCart = (itemId) => {
  setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
  }


  const contextValue = {all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems};

return(
  <ShopContext.Provider value={contextValue}>
    {itemsForSale.children}
  </ShopContext.Provider>
)

}

export default ShopContextProvider;