import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { Product } from '../../interfaces/productSliceInterface'
import { BestSellingProductsCards } from './BestSellingProductsCards'
import { truncateString } from '../../utils/utilities';

// Component
export const AllProductsCards = ({ image, title, price, id }: Product) => {

  const navigate = useNavigate();


  const newString = truncateString(title);

  const handleNavigation = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div onClick={handleNavigation} className="all-products-cards-main-container">
      <img 
        src={image} 
        alt="pruduct-image" 
        className="all-products-cards-img" />
      <h2 className="best-seller-product-cards-title">
          {newString}
      </h2>
      <div className="all-product-cards-price">
        ${price}
      </div>
    </div>
  )
}
