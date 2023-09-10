import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs';

import { signOut } from 'firebase/auth'; 
import { auth } from '../../firebase/config';

export const Navbar = () => {

    const handleLogOUt = async () => {
        let userOut = await signOut(auth);
    }

    return(
        <div className="navbar-main-container">
            <Link to="/" className="navbar-main-container-h1-tittle">PrimePicks</Link>
            <div className="navbar-main-container-info-links">
                <Link className='navbar-main-container-info-navigation' to="/">Home</Link>
                <Link className='navbar-main-container-info-navigation' to="/home">Shop</Link>
                <Link className='navbar-main-container-info-navigation' to="/home">Contact</Link>
            </div>
            <div className="navbar-main-container-user-cart">
                <div className="navbar-main-container-user-container">
                    <Link to='/signin'>
                        <AiOutlineUser style={{fontSize: "22px"}} />
                    </Link>
                </div>
                <div className="navbar-main-container-cart-container">
                    <Link to="/cart">
                        <BsBag style={{fontSize: "22px"}} />
                    </Link>
                </div>
            </div>
        
            <button
                style={{
                    position: "relative",
                    top: 0,
                    left: 0,
                    padding: "20px",
                    fontSize: "25px"
                }}
                onClick={handleLogOUt}
            >

                LOGOUT

            </button>

        </div>
    );
};
 