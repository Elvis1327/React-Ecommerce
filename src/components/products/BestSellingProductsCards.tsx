import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Product } from '../../interfaces/productSliceInterface';
import { truncateString } from '../../utils/utilities';

export const BestSellingProductsCards = ({title, image, price, id}: Product) => {

  const navigate = useNavigate();

  let newString = truncateString(title!);

  const handleNavigation = () => {
    navigate(`/product/${id}`)
  }


  return (
    <div className="best-product-cards-main-container" onClick={handleNavigation}>
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
