import Stripe from 'stripe';

export const stripe = new Stripe(
  process.env.NEXT_PUBLIC_STRIPE_API_KEY,
  {
    apiVersion: '2020-08-27',
    appInfo: {
      name: 'devblog',
      version: '0.1,0'
    }
  }
);
