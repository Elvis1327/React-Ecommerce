import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signOut } from 'firebase/auth'; 
import { auth } from '../../firebase/config';
import { AppDispatch } from '../../store/store';
import { RootReducer } from '../../interfaces/reducersInterface';



export const Navbar = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { user } = useSelector((state: RootReducer) => state.auth);
    const navigate = useNavigate();

    const handleLogOUt = async () => {
        let userOut = await signOut(auth);
        navigate('/signin')
    };


    return(
        <div className="navbar-main-container">
            <Link to="/" className="navbar-main-container-h1-tittle">PrimePicks</Link>
            <div className="navbar-main-container-info-links">
                <Link className='navbar-main-container-info-navigation' to="/">Home</Link>
                <Link className='navbar-main-container-info-navigation' to="/best-selling">Shop</Link>
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
                { user === true && <button className="isUserInButton" onClick={handleLogOUt}>Logout</button> }
            </div>
        
            

        </div>
    );
};
 