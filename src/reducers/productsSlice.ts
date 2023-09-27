import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { ProductCart, ProductsSliceInterface } from '../interfaces/productSliceInterface';
import { getAllProductsFetch, getProductByIdFetch } from '../utils/fetchProducts';


// Initial State
const initialState: ProductsSliceInterface = {
     singleProduct: {},
     allProducts: [],
     productById: {},
     productByIdLoading: true,
     cart: JSON.parse(localStorage.getItem('cart')!) || []
};

// Reducer
const productsSlice = createSlice({
    name: "productsSlice",
    initialState,
    reducers: {
        // ADDING A PRODUCT TO THE CART
        addProductToCart: (state, action) => {
            let productExist = state.cart.find((product: ProductCart) => product.productId === action.payload.id);
            if(productExist){
                let updateCart = state.cart.map((res: ProductCart) => {
                    if (res.productId === action.payload.id){
                        return {
                            ...res,
                            productQuantity: res.productQuantity + 1
                        };
                    };
                    return res
                })
                state.cart = updateCart;
                localStorage.setItem('cart', JSON.stringify(state.cart));
            }else{
                state.cart.push({
                    productId: action.payload.id,
                    productImage: action.payload.image,
                    productPrice: action.payload.price,
                    productQuantity: 1,
                    productTitle: action.payload.title,
                });
                localStorage.setItem('cart', JSON.stringify(state.cart));
            };
        },
        // REMOVE ITEM FROM CART
        removeItemFromCart: (state, action) => {
            let productExist = state.cart.find((product: ProductCart) => product.productId === action.payload.productId)
            if(productExist){
                let productEliminated = state.cart.filter((product: ProductCart) => product.productId !== action.payload.productId);
                state.cart = productEliminated;
                localStorage.setItem('cart', JSON.stringify(state.cart));
            };
        },
        // Increment Quantity Product Cart
        incrementItemFromCart: (state, action) => {
            let productExist = state.cart.find((product:ProductCart) => product.productId === action.payload.productId);
            if(productExist){
                let productIncremented = state.cart.map((product: ProductCart) => {
                    if(product.productId === action.payload.productId){
                        return{
                            ...product,
                            productQuantity: product.productQuantity + 1
                        };
                    };
                    return product
                });
                state.cart = productIncremented;
                localStorage.setItem('cart', JSON.stringify(state.cart));
            };
        },
        // DECREMENT QUANTITY PRODUCT CART
        decrementItemFromCart: (state, action) => {
            let product = state.cart.find((item: ProductCart) => item.productId === action.payload.productId);
            if(product && product.productQuantity <= 1){
                state.cart = state.cart.filter((item:ProductCart) => item.productId !== action.payload.productId);
                localStorage.setItem('cart', JSON.stringify(state.cart));
            };
            if(product){
                let newQuantity = state.cart.map((item: ProductCart) => {
                    if (item.productId === action.payload.productId){
                        return {
                            ...item,
                            productQuantity: item.productQuantity - 1
                        }
                    };
                    return item
                })
                state.cart = newQuantity;
                localStorage.setItem('cart', JSON.stringify(state.cart));
            }
        }
    },

    extraReducers: (builder) => {
        // Get All Products
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload;
        });
        // Get Product By ID
        // Loading Data
        builder.addCase(getProductById.pending, (state, action) => {
            state.productByIdLoading = true
            state.productById = action.payload;
        })
        // Petition Success
        builder.addCase(getProductById.fulfilled, (state, action) => {
            state.productById = action.payload;
            state.productByIdLoading = false
        })
        // Petition Failed
        builder.addCase(getProductById.rejected, (state, action) => {
            state.productByIdLoading = false
        })
    }
});

// Get all Products
export const getAllProducts = createAsyncThunk(
    'Product/getAllProducts',
    async () => {
        const allProducts = await getAllProductsFetch();
        return allProducts;
    }
)
// Get Product By ID
export const getProductById = createAsyncThunk(
    'Product/GetProductById',
    async (userId: any) => {
        const data = await getProductByIdFetch(userId);
        return data;
    }
);

export const { addProductToCart, removeItemFromCart, incrementItemFromCart, decrementItemFromCart } = productsSlice.actions;
export default productsSlice.reducer;


