import React, { createContext, useState } from "react";
import { data } from "../data/data.js";



export const ShopContext = createContext(null);

const ShopContextProvider = (itemsForSale) => {

  // const [all_products, setAll_Products] = useState([]);

  const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
      cart[index] = 0;
      }
  return cart;
  }

  const[cartItems, setCartItems] = useState(getDefaultCart());

//   useEffect(() => {
// fetch("http://localhost:8000/allproducts") 
// .then((res)=> res.json())
// .then((data)=>setAll_Products(data))

// },[])

const setAll_Products = () => {
  fetch("http://localhost:8000/allproducts") 
.then((res)=> res.json())
.then((data)=>setAll_Products(data))
if(localStorage.getItem("auth-token")){
  fetch("http://localhost:8000/getcart", {
    method: "POST",
    headers: {
      Accept: "application/form-data",
      "auth-token": `${localStorage.getItem("auth-token")}`,
      "Content-Type": "application/json",
    },
    body: "",
  }).then((res) => res.json())
  .then((data)=>setCartItems(data));
}
}

  const getTotalCartAmount = () => {
    let totalAmount = 0;
   
    for(const item in cartItems) {
      if(cartItems[item]?.quantity >  0)
      {
       //let itemInfo = all_products.find((product)=>product.id===Number(item));
       let itemInfo = data.find((product)=>product.id===Number(item));
             totalAmount += cartItems[item].quantity * itemInfo.price;
 
              }
    }
    return totalAmount.toFixed(2);

  }


  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const itemId in cartItems) {
      if(cartItems[itemId]?.quantity>0){
        totalItem += cartItems[itemId].quantity;
      }
    }
    return totalItem;
  }
//change size

// const changeSize = () => {
//   cosnt [selectedSize, setSelectedSize] = useState('S');
//   return (
//     <select
//       value={selectedSize}
//       onChange={e => setSelectedSize(e.target.value)}
//     >
//       <option value="sizes">S</option>
//       <option value="sizem">M</option>
//       <option value="sizel">L</option>
//       <option value="sizexl">XL</option>
//     </select>
//   );
// }




const addToCart = (itemId, selectedSize) => {
setCartItems((prev) => ({
  ...prev,
  [itemId]: {
  quantity: (prev[itemId]?.quantity || 0 ) + 1, 
 size:selectedSize}, }))
if(localStorage.getItem("auth-token")){
  fetch("http://localhost:8000/addtocart", {
    method: "POST",
    headers: {
      Accept: "application/form-data",
      "auth-token": `${localStorage.getItem("auth-token")}`,
      "Content-Type": "application/json",
    },
  body: JSON.stringify({"itemId":itemId, size: selectedSize}),
  })
  .then((res)=>res.json())

}
}



const removeFromCart = (itemId) => {
  setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
  if(localStorage.getItem("auth-token")){
    fetch("http://localhost:8000/removefromcart", {
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

  const checkout = () => {
    fetch("http://localhost:8000/create-checkout-session", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      mode:"cors",
      body: JSON.stringify({
        items: [
          {id:1, quantity: getTotalCartItems(), price: getTotalCartAmount()}
        ]
      })
    })
    .then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
    .then(({url})=>{
      window.location = url
    })
    .catch(e => {
      console.log(e.error)
    })
  }




  const contextValue = {data, setAll_Products, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems, checkout};

return(
  <ShopContext.Provider value={contextValue}>
    {itemsForSale.children}
  </ShopContext.Provider>
)

}

export default ShopContextProvider;