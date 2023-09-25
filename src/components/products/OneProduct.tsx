import React from 'react';
import HatBanner from '../../assets/hatbanner.jpg';

export const OneProduct = () => {
  return (
    <div className="one-product-main-container-img-banner"
      style={{backgroundImage: `url(${HatBanner})`}}
      >
        <div className="one-product-main-container-container">
            <h1>Best Products Best Prices</h1>
            <span>Find Everything Here</span>
            <button>Shop Now</button>
        </div>
    </div>
  )
}
