import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { ProductsSliceInterface } from '../interfaces/productSliceInterface';
import { getAllProductsFetch, getOneSingleProdcut } from '../utils/fetchProducts';


// Initial State
const initialState: ProductsSliceInterface = {
     singleProduct: {},
     allProducts: []
};

// Reducer
const productsSlice = createSlice({
    name: "productsSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        
        // One single Product
        builder.addCase(oneSingleProduct.fulfilled, (state,action) => {
            state.singleProduct = action.payload
        });

        // Get All Products
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload
        });
    }
});

// Get One Product
export const oneSingleProduct = createAsyncThunk(
    'Product/getOneSingleProduct',
    async () => {
        const oneProduct = await getOneSingleProdcut();
        return oneProduct
    }
);
// Get all Products
export const getAllProducts = createAsyncThunk(
    'Product/getAllProducts',
    async () => {
        const allProducts = await getAllProductsFetch();
        return allProducts;
    }
)

export default productsSlice.reducer;


