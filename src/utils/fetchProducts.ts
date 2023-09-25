import axios from 'axios';
import { Product } from '../interfaces/productSliceInterface';

const fetchProducts = axios.create({
    baseURL: "https://fakestoreapi.com/products/"
});



// Get all Products
export const getAllProductsFetch = async () => {
    const { data } = await fetchProducts('');
    return data;
}

// Get Product By Id
export const getProductByIdFetch = async (id: any) => {
    const { data } = await fetchProducts(id)
    return data;
}

