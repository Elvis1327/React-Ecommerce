import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signOut } from 'firebase/auth'; 
import { auth } from '../../firebase/config';
import { RootReducer } from '../../interfaces/reducersInterface';
import { NavbarResponsive } from './NavbarResponsive';



export const Navbar = () => {

    const { user } = useSelector((state: RootReducer) => state.auth);
    const navigate = useNavigate();

    const handleLogOUt = async () => {
        let userOut = await signOut(auth);
        navigate('/signin')
    };

    return(
        <>
            <NavbarResponsive />
            <div className="navbar-main-container">
                <Link to="/" className="navbar-main-container-h1-tittle">PrimePicks</Link>
                <div className="navbar-main-container-info-links">
                    <Link className='navbar-main-container-info-navigation' to="/">Home</Link>
                    <Link className='navbar-main-container-info-navigation' to="/best-selling">Shop</Link>
                    <a 
                        className='navbar-main-container-info-navigation'
                        target='_blank'
                        href='https://elvingarcias.com'
                    >
                        Contact
                    </a>
                </div>
                <div className="navbar-main-container-user-cart">
                    {user 
                        ?
                        <button className="isUserInButton" onClick={handleLogOUt}>Logout</button>
                        :
                        <div className="navbar-main-container-user-container">
                            <Link to='/signin' style={{color: "black"}}>
                                <AiOutlineUser style={{fontSize: "22px"}} />
                            </Link>
                        </div>
                    }

                    <div className="navbar-main-container-cart-container">
                        <Link to="/cart" style={{color: "black"}}>
                            <BsBag style={{fontSize: "22px"}} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
 