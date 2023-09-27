import React from 'react';
import Cart from '../../assets/empty-cart.svg';
import { useNavigate } from 'react-router-dom';


export const EmptyCart = () => {

    const navigate = useNavigate();

    const goToShopping = () => {
        navigate('/best-selling')
    };
        
    return (
        <div className="empty-cart-main-container">
            <h1 className="empty-cart-info-tittle">
                SHOPPING CART
            </h1>
            <img
                className='empty-cart-info-img'
                src={Cart}
                alt="Empty-Cart" 
            />
            <h1 className="empty-cart-info-issue">
                Your Cart is Currently Empty!
            </h1>
            <button className="empty-cart-info-button" onClick={goToShopping}>
                Return to Shop
            </button>
        </div>
    )
}

