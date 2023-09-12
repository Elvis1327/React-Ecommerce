import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';

import { Navbar } from '../pages/shared/Navbar';
import { Home } from '../pages/shared/Home';
import { SignIn } from '../pages/auth/SignIn';
import { SignUp } from '../pages/auth/SignUp';
import { Cart } from '../pages/cart/Cart';
import { auth } from '../firebase/config';
import { AppDispatch } from '../store/store';
import { RootReducer } from '../interfaces/reducersInterface';

import { userIsActive } from '../features/authSlice';




export const RootRouter = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { user } = useSelector((state: RootReducer) => state.auth)
    console.log(user)



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                dispatch(userIsActive(true));
            }else{
                dispatch(userIsActive(false));
            }
        });
    },[]);

    return(
        <>
        <BrowserRouter>
            <Navbar  />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/cart' element={<Cart />} /> 
            </Routes>
        </BrowserRouter>
        </>
    )

}

