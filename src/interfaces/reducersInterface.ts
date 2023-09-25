import { authSliceInterface } from "./authSliceInterface";
import { ProductsSliceInterface } from "./productSliceInterface";


export interface RootReducer {
    auth: authSliceInterface;
    products: ProductsSliceInterface;
};



