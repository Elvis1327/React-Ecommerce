import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { Navbar } from '../pages/shared/Navbar';
import { Home } from '../pages/shared/Home';
import { SignIn } from '../pages/auth/SignIn';
import { SignUp } from '../pages/auth/SignUp';
import { Cart } from '../pages/cart/Cart';
import { auth } from '../firebase/config';
import { AppDispatch } from '../store/store';

import { userIsActive } from '../reducers/authSlice';
import { PrivateRoutes } from './PrivateRoutes';
import { AllProducts } from '../pages/products/AllProducts';
import { ProductsById } from '../pages/products/ProductsById';




export const RootRouter = () => {

    const dispatch = useDispatch<AppDispatch>();

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
                {/* <Route element={<PrivateRoutes />} >
                </Route> */}
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />     
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/best-selling' element={<AllProducts />} />
                <Route path='/product/:id' element={<ProductsById />} />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
        </>
    )

}

