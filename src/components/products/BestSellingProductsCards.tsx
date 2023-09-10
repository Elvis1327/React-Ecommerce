import React from 'react';

import { Product } from '../../interfaces/productSliceInterface'

export const BestSellingProductsCards = ({title, image, price}: Product) => {

  let truncateString = (data: string) => {
    if(data.length > 20){
      return data.slice(0,20) + "...";
    }
    return data
  }

  let newString = truncateString(title!)


  return (
    <div className="best-product-cards-main-container">
      <img 
        src={image} 
        alt="pruduct-image" 
        className="best-seller-product-cards-img" />
      <h2 className="best-seller-product-cards-title">
          {newString}
      </h2>
      <div className="best-seller-product-cards-price">
        ${price}
      </div>
    </div>
  )
}
