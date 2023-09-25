import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineUser, AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';

import { RootReducer } from '../../interfaces/reducersInterface';
import { AppDispatch } from '../../store/store';
import { getAllProducts } from '../../reducers/productsSlice';
import TShirt from '../../../public/tshirt.jpg'; 
import Bag from '../../../public/bag.jpg'; 

export const NavbarResponsive = () => {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getAllProducts());
    },[])

    const [ isClosed, setIsClosed ] = useState(false);

    const { user } = useSelector((state: RootReducer) => state.auth);
    const { allProducts } = useSelector((state: RootReducer) => state.products);

    const handleMenu = () => {
        setIsClosed(!isClosed);
    };

  return (
    <div className="navbar-responsive-menu">
        <button className="menu-button" onClick={handleMenu}>
            { isClosed ? <AiOutlineClose /> : <AiOutlineMenu /> }
        </button>
        <ul className={ isClosed ? "navbar-responsive-links active" : "navbar-responsive-links" }>
            <div className="navbar-responsive-to-redirect">
                <img 
                    src={TShirt} 
                    alt="image"
                    style={{width: "14px"}}
                />
                <span> Best Sellers </span>
            </div>
            <div className="navbar-responsive-to-redirect">
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
            { user !== true &&
                <Link to='/signin'>
                    <AiOutlineUser style={{fontSize: "22px"}} />
                </Link>
            }
            <Link to="/cart">
                <BsBag style={{fontSize: "22px"}} />
            </Link>
        </div>
    </div>
  )
}
