import { loadStripe } from '@stripe/stripe-js';

let stripePromise: any;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51JEjdtGsQpXR0imuQPevbvykcGXeXtXRrC6qnLmalvcng1tKWH7TXwKbDHi2HcUfPUv4LVG5j4381DxUGkWxMSKQ00xnkFnM57')
  }
  return stripePromise;
};

export default getStripe;