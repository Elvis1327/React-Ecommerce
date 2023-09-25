import React, { useEffect } from 'react';

import { OneProduct } from '../../components/products/OneProduct';
import { BestSelling } from '../products/BestSelling';

export const Home = () => {

  return (
    <div className='home-main-container'>
      <OneProduct />
      <BestSelling />
    </div>
  )
}
