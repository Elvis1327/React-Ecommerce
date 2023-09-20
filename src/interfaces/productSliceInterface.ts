
// Products Interface
export interface ProductsSliceInterface  {
    singleProduct: Product | any;
    allProducts: Product[] | any[];
    productById: Product | any;
    productByIdLoading: Boolean;
    cart: ProductCart[];
};

export interface Product  {
    id?: number;
    title?: string;
    price?: number;
    description?: string;
    category?: string;
    image?: string;
    rating: Rating
};

interface Rating {
    rate: number;
    count: number;
};

export type ProductCart = {
    productId: number;
    productTitle: string;
    productPrice: number;
    productImage: string;
    productQuantity: number;
}






