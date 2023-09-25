



// This function return a new string in witch if the lenght of the old string

import { Product } from "../interfaces/productSliceInterface";

// was greater than 20 we return a new String
export const truncateString = (data: string | any) => {
    if(data.length > 20){
        return data.slice(0,20) + '...';
    }
    return data;
};

// Return 4 best seller Products
// Custom Function to get 4 best sellers Items
export const getBestSellerProducts = (data: Product[]) => {
    let bestRatingProducts: any[] = []
    data.map((product) => {
        if (product.rating.rate >= 4.5){
            bestRatingProducts.push(product);
        };
    })
    return bestRatingProducts.slice(0,4);
};
