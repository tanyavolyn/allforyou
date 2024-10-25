import React, { useContext, useEffect} from "react";
import { ShopContext } from "../Context/ShopContext";


//import Stripe from "../Stripe/StripeContainer";
import {
  Link
} from "react-router-dom";





const CartItems = () => {
 
  const {data, setAll_Products, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);



  useEffect(()=>{
    setAll_Products()

  }, [])



  return (

    <div className="container-cart">
      <div className="container-list">
      <div className="top-list">
        <p className="list-one">Products</p>
        <p className="list-two">Title</p>
        <p className="list-two">Size</p>
        <p className="list-two">Price</p>
        <p className="list-two">Quantity</p>
        <p className="list-two">Total</p>
        <p className="list-two">Remove</p>
      </div>
      <hr />
      {data.map((e)=>{

        if(cartItems[e.id]?.quantity>0)
 
        {
          return  <div key={e.id}>
                    <div className="item-list">
                      <p className="list-one"><img className="img-list" src={e.image} width="80px" alt="Bild" /></p>
                      <p className="item-name list-two">{e.name}</p>
                      <p className="item-size list-two">{cartItems[e.id]?.size}</p>

                      <p className="item-price list-two">€{e.price}</p>

                      <p className="list-two"><button className="item-quantity">{cartItems[e.id].quantity}</button></p>
                      
                      <p className="item-total list-two">€{e.price*cartItems[e.id].quantity}</p>
                      <p className="list-two"><img src="cart_cross_icon.png" width="15px" height="15px" onClick={()=>{removeFromCart(e.id)}} alt="cross_icon" /></p>
                    </div>
                     <hr />
                  </div>;
        }
        return null;
      })}
      </div>
      <section>
        <div>
          <h2>CART TOTALS</h2>
          <div >
            <div >
              <p>Subtotal</p>
              <p>€{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div >
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div>
              <h3>Total</h3>
              <h3>€{getTotalCartAmount()}</h3>
            </div>
          </div>
 
          
<Link className="container-checkout-btn" to={"/StripeContainer"}><button className="checkout-btn">CHECKOUT</button></Link>

          {/* <Stripe/> */}
        </div>
       
      </section>
    </div>
  
  );
};

export default CartItems;