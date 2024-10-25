import React, { useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";
import { ShopContext } from "../Context/ShopContext";

const PUBLIC_KEY = "pk_test_51OHwkvJZ4arl6xajjxx8aQ1cU91jKtUEs3gJbPnjjGhBLTYmIIIfg2olMZfAL3KKt7VuiztvBrtEfnWlDUE2VcSW00jaHf0Kg5";


const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  const {getTotalCartAmount} = useContext(ShopContext);
  return (
    <div className="pay-container">
      <div>
      <h2>Total: {getTotalCartAmount()}$</h2>
      </div>
      <div className="stripe-input">
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
    </div>
    </div>
  );
};

export default Stripe;