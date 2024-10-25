import React, { useContext, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { ShopContext } from "../Context/ShopContext";
//import CartItems from "../Components/CartItems";


export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const {getTotalCartAmount} = useContext(ShopContext);
  const [messageSuccess, setMessageSucces] = useState(false);
  const amount = getTotalCartAmount();
  console.log(amount)

  


  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "https://allforyou.onrender.com/stripe/charge",
          {
          
            amount: amount,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
          setMessageSucces(true)
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div className="card">
      {!messageSuccess ?
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <CardElement />
<div className="pay-btn-container">
      <button className="pay-btn">Pay</button>
      </div>
      
    </form>
:
    <div>
      <h2>Yuor payment was successful!</h2>
      <p>Enjoy your purchase!</p>
    </div>
}
    </div>
      
  );
};





