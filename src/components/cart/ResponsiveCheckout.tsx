import React from 'react'
import axios from 'axios';

export const ResponsiveCheckout = ({ total, cart }: any) => {

    const handleCheckout = async () => {

        const data = await axios.post('https://node-backend-practice.onrender.com/stripe/checkout', cart);
        if(data){
            window.location.href = data.data
        };

    };

  return (
    <div className='responsive-checkout-main-container'>
        <button className="responsive-checkout-button-clear">
            Clear Cart
        </button>
        <div className="responsive-checkout-total-button">
            <span style={{fontWeight: "bold"}}>
                {total.toFixed(2)}
            </span>
            <button className="responsive-chekcout-button" onClick={handleCheckout}>
                Checkout({cart.length})
            </button>
        </div>
    </div>
  );
};
