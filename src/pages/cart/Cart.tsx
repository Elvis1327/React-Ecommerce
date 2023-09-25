import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaMinus, FaPlus } from 'react-icons/fa'
import { ImCancelCircle } from 'react-icons/im';

import { AppDispatch } from '../../store/store';
import { RootReducer } from '../../interfaces/reducersInterface';
import { decrementItemFromCart, incrementItemFromCart, removeItemFromCart } from '../../reducers/productsSlice';
import { Product, ProductCart } from '../../interfaces/productSliceInterface';
import { EmptyCart } from '../../components/cart/EmptyCart';
import axios from 'axios';
import getStripe from '../../lib/stripe';


export const Cart = () => {

  // Redux
  const dispatch = useDispatch<AppDispatch>();
  const { cart } = useSelector((state:RootReducer) => state.products);

  // Get Total Products
  const total = cart.reduce((acc, product) => {
    return acc + (product.productPrice * product.productQuantity)
  },0);

  // Remove item from Cart
  const removeProduct = (product: ProductCart) => {
    dispatch(removeItemFromCart(product))
  };

  // Increment Product Quantity
  const incrementProductQuantity = (product: ProductCart) => {
    dispatch(incrementItemFromCart(product))
  };
  // Decrement Product
  const decrementProduct = (product: ProductCart) => {
    dispatch(decrementItemFromCart(product))
  };

  // Handle Checkout Function
  const handleCheckout =  async () => {

    const stripe = await getStripe();
    const data = await axios.post('http://localhost:4000/checkout', cart);

  }

  if(cart.length === 0){
    return <EmptyCart />
  };

  return (
    <section className="cart-main-container">
      
      <article className="cart-products-info">
        {cart.map((product) => (

          // Product Cart
          <div className="cart-products-info-card" key={product.productId}>
            {/* Card Image */}
            <img 
              src={product.productImage} 
              alt="image-product" 
              className="cart-products-info-card-img" 
              />

            {/* Products Info */}
            <div className="cart-products-info-card-info">
              <h1 className="cart-products-info-card-name">
                {product.productTitle}
              </h1>
              <span className="cart-products-info-card-shipping">
                Free Shipping
              </span>
              <span className='cart-products-info-card-delivery' style={{marginBottom: "5px"}}>Delivery <strong>1-2 working days.</strong></span>

              {/* Quantity Container */}
              <article className="cart-products-info-card-quantity-container">
                <h2 className='cart-products-info-card-quantity-h2'>Qty:</h2>
                {/* Buttons container add and remove */}
                <div className="cart-products-info-card-quantity-buttons-container">
                  <button className='cart-products-info-minus-button' onClick={() => decrementProduct(product)}>
                    <FaMinus />
                  </button>
                  <span style={{fontSize: 14, fontWeight: "bold"}}>{product.productQuantity}</span>
                  <button className='cart-products-info-plus-button' onClick={() => incrementProductQuantity(product)}>
                    <FaPlus  />
                  </button>
                </div>
                <span className="cart-products-info-card-quantity-total">
                  <strong>${product.productQuantity * product.productPrice}</strong>
                </span>
              </article>
            </div>

            {/* Remove Item from Cart */}
            <button className='cart-products-info-card-remove-product' onClick={() => removeProduct(product)}>
              <ImCancelCircle />
            </button>
          </div>

        ))}
      </article>
      <article className="cart-products-checkout-container">
          <h1 className='cart-products-checkout-container-h1'>Order Sumary</h1>
          <div className="cart-products-checkout-info">
            <div className="cart-products-checkout-info-child">
              <span>Delivery</span>
              <span>$0.00</span>
            </div>
            <div className="cart-products-checkout-info-child">
              <span>Tax</span>
              <span>Calculated at next step</span>
            </div>
            <div className="cart-products-checkout-info-child">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="cart-products-checkout-info-button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
      </article>
    </section>
  );
};
