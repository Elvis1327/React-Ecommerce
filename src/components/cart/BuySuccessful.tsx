import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import Thanks from '../../assets/55_generated.jpg';

export const BuySuccessful = () => {

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/best-selling')
    };

    return (
        <div className="buysuccessful-main-container">
            <img 
                src={Thanks} 
                alt="picture"
                className='buysuccessful-img'
            />
            <h1 className='buysuccessful-title'>
                Thanks For Buying At <strong >PrimePicks</strong>
            </h1>
            <button onClick={handleNavigation} className="buysuccessful-return-shopping-button">
                Return To Shoping
            </button>
        </div>
    )
}


