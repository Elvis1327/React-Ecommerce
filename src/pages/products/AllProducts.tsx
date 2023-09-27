import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch } from '../../store/store';
import { getAllProducts } from '../../reducers/productsSlice';
import { RootReducer } from '../../interfaces/reducersInterface';
import { Product } from '../../interfaces/productSliceInterface';
import { AllProductsCards } from '../../components/products/AllProductsCards';
import BestSellersBanner from '../../assets/shop-banner.jpg';

export const AllProducts = () => {

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getAllProducts())
    },[]);

    const { allProducts } = useSelector((state: RootReducer) => state.products);

    return(
        <div className="all-products-main-container">
            <div className="all-products-main-container-banner"
                style={{backgroundImage: `url(${BestSellersBanner})`}}
                >
                <h1 className="all-products-main-container-banner-h1">
                    BEST SELLING
                </h1>
            </div>
            <div className="all-products-main-container-main-cards">
                {allProducts.map((product: Product) => (
                    <AllProductsCards {...product} key={product.id} />
                ))}
            </div>
        </div>
    )
}

