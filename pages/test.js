import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

let stripePromise = null;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

export async function redirectToCheckout(lineItems) {
  const stripe = await getStripe();

  const { error } = await stripe.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin, // Fix spelling: `loaction` to `location`
  });

  if (error) {
    console.error('Error redirecting to checkout:', error);
  }
}
