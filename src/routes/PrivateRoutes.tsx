import React from 'react';

import { useSelector } from 'react-redux';
import { RootReducer } from '../interfaces/reducersInterface';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes = () => {

  const { user } = useSelector((state: RootReducer) => state.auth);

  return (
    user ? <Outlet /> : <Navigate to="/signin" />
  )
}
