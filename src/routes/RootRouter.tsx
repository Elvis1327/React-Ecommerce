import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { Navbar } from '../pages/shared/Navbar';
import { Home } from '../pages/shared/Home';
import { SignIn } from '../pages/auth/SignIn';
import { SignUp } from '../pages/auth/SignUp';
import { Cart } from '../pages/cart/Cart';
import { auth } from '../firebase/config';


export const RootRouter = () => {

    useEffect(() => {

            onAuthStateChanged(auth, (user) => {
                console.log("currentUser", user)
            })


    },[])

    return(
        <>
        <BrowserRouter>
            <Navbar />
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

