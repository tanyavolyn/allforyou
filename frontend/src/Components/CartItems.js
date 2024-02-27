import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const CartItems = () => {
 
  const {all_products, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);

  return (
    <div>
      <div>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e)=>{

        if(cartItems[e.id]>0)
        {
          return  <div>
                    <div>
                      <img src={e.image} alt="Bild" />
                      <p>{e.name}</p>
                      <p>${e.price}</p>
                      <button>{cartItems[e.id]}</button>
                      <p>${e.price*cartItems[e.id]}</p>
                      <img onClick={()=>{removeFromCart(e.id)}} alt="cross_icon" />
                    </div>
                     <hr />
                  </div>;
        }
        return null;
      })}
      
      <div>
        <div>
          <h1>Cart Totals</h1>
          <div>
            <div >
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
       
      </div>
    </div>
  );
};

export default CartItems;
