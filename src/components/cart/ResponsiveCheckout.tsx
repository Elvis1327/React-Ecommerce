import React from 'react'

export const ResponsiveCheckout = ({ total, cart }: any) => {
  return (
    <div className='responsive-checkout-main-container'>
        <button className="responsive-checkout-button-clear">
            Clear Cart
        </button>
        <div className="responsive-checkout-total-button">
            <span>
                {total.toFixed(2)}
            </span>
            <button className="responsive-chekcout-button">
                Checkout({cart.length})
            </button>
        </div>
    </div>
  )
}
