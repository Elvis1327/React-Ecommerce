import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { oneSingleProduct } from '../../reducers/productsSlice';
import { AppDispatch } from '../../store/store';
import { RootReducer } from '../../interfaces/reducersInterface';
import { OneProduct } from '../../components/products/OneProduct';
import { BestSelling } from '../products/BestSelling';

export const Home = () => {

  const dispatch = useDispatch<AppDispatch>();

  const { singleProduct } = useSelector((state: RootReducer) => state.products);

  useEffect(() => {
    dispatch(oneSingleProduct())
  }, [])

  return (
    <div className='home-main-container'>
      <OneProduct />
      <BestSelling />
    </div>
  )
}
