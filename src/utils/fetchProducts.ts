import axios from 'axios';
import { Product } from '../interfaces/productSliceInterface';

const fetchProducts = axios.create({
    baseURL: "https://fakestoreapi.com/products/"
});

// Get one Product
export const getOneSingleProdcut = async () => {
    const { data } = await fetchProducts('2');
    return data;
};

// Get all Products
export const getAllProductsFetch = async () => {
    const { data } = await fetchProducts('');
    return data;
}

// Custom Function to get 4 best sellers Items
export const getBestSellerProducts = (data: Product[]) => {
    let bestRatingProducts: any[] = []
    data.map((product) => {
        if (product.rating?.rate >= 4.5){
            bestRatingProducts.push(product);
        };
    })
    return bestRatingProducts.slice(0,4);
};

