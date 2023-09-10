import React from 'react'
import { Product } from '../../interfaces/productSliceInterface'

export const OneProduct = ({category, description, image}: Product) => {
  return (
    <div className="one-product-main-container-img-banner">
        <div className="one-product-main-container-container">
            <h1>Best Products Best Prices</h1>
            <span>Find Everything Here</span>
            <button>Shop Now</button>
        </div>
    </div>
  )
}
