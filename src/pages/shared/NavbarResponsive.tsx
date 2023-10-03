import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineMenu, AiOutlineUser, AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import { signOut } from 'firebase/auth';

import { auth } from '../../firebase/config';
import { RootReducer } from '../../interfaces/reducersInterface';
import { AppDispatch } from '../../store/store';
import { getAllProducts } from '../../reducers/productsSlice';
import TShirt from '../../assets/tshirt.jpg'; 
import Bag from '../../assets/bag.jpg'; 

export const NavbarResponsive = () => {

    const navigate = useNavigate();

    const [ isOpen, setIsOpen ] = useState(false);

    const { user } = useSelector((state: RootReducer) => state.auth);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogOut = async () => {
        const userLogOut = await signOut(auth);
        navigate('/signin');
    };

    const redirectToHome = () => {
        setIsOpen(false);
        navigate('/')
    };

    const redirectToBestSellers = () => {
        setIsOpen(false)
        navigate('/best-selling')
    }


  return (
    <div className="navbar-responsive-menu">
        <button className="menu-button" onClick={handleMenu}>
            { isOpen ? <AiOutlineClose style={{ background: "white", color: "black" }} /> : <AiOutlineMenu style={{ background: "white", color: "black" }} /> }
        </button>
        <ul className={ isOpen ? "navbar-responsive-links active" : "navbar-responsive-links" }>
            <div className="navbar-responsive-to-redirect" onClick={redirectToHome}>
                <img 
                    src={TShirt} 
                    alt="image"
                    style={{width: "14px"}}
                />
                <span> Best Sellers </span>
            </div>
            <div className="navbar-responsive-to-redirect" onClick={redirectToBestSellers}>
                <img 
                    src={Bag}  
                    alt="image"
                    style={{width: "14px"}}
                />
                <span> All Products </span>
            </div>
        </ul>
        <Link to="/" className="navbar-responsive-tittle">
            PrimePicks
        </Link>
        <div className="navbar-responsive-user-cart">
            { user ?
                <button className="isUserInButton" onClick={handleLogOut}>Logout</button>
                :
                <Link to='/signin'>
                    <AiOutlineUser style={{fontSize: "22px", color: "black"}} />
                </Link>
            }
            <Link to="/cart">
                <BsBag style={{fontSize: "22px", color: "black"}} />
            </Link>
        </div>
    </div>
  )
}














