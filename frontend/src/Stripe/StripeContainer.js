import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51OHwkvJZ4arl6xajjxx8aQ1cU91jKtUEs3gJbPnjjGhBLTYmIIIfg2olMZfAL3KKt7VuiztvBrtEfnWlDUE2VcSW00jaHf0Kg5";


const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;