import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { AppDispatch } from '../../store/store';
import { getAllProducts } from '../../reducers/productsSlice';
import { RootReducer } from '../../interfaces/reducersInterface';
import { BestSellingProductsCards } from '../../components/products/BestSellingProductsCards';
import { getBestSellerProducts } from '../../utils/fetchProducts';

export const BestSelling = () => {

    const dispatch = useDispatch<AppDispatch>();
    const { allProducts } = useSelector((state:RootReducer) => state.products);

    useEffect(() =>{
        dispatch(getAllProducts())
    },[]);

    const bestSellerProducts = getBestSellerProducts(allProducts);

  return (
    <div className="best-selling-main-container">
        <h1 className="best-selling-container-h1">
            BEST SELLING
        </h1>
        <div className="best-selling-container-selling-products">
            {bestSellerProducts.map((product) => (
                <BestSellingProductsCards
                    key={product.id} 
                    {...product} 
                />
            ))}
        </div>
    </div>
  );
};
