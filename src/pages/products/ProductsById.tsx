import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsBoxSeam } from 'react-icons/bs';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


import { AppDispatch } from '../../store/store';
import { RootReducer } from '../../interfaces/reducersInterface';
import { getProductById, addProductToCart } from '../../reducers/productsSlice';


export const ProductsById = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const { productById, productByIdLoading } = useSelector((state: RootReducer)=> state.products);

  // Get product by ID
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProductById(id))
  },[]);

  // Add product to cart
  const getProductToCart = (productById: any) => {
    dispatch(addProductToCart(productById));
    // Toast to alert user 
    toast.success('The Product has been added to the Cart', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 800
    });
    navigate('/cart');
  };

  return (
    <section className="product-by-id-main-container">

      {productByIdLoading 
        ? 
          <div className='product-by-id-loading-spinner'></div>
        :
        <>
          <article className="product-by-id-image-container">
            <img 
              src={productById?.image} 
              alt="Product-Image" 
              className="product-by-id-image" />
          </article>

          <article className="product-by-id-info-container">
            <div className="product-by-id-main-info">
              <h1 className="product-by-id-info-h1-title">
                {productById?.title}
              </h1>
              <span className="product-by-id-info-price">
                $ {productById?.price}
              </span>
            </div>

            <div className="product-by-id-stock-ship-info">
              <span className="product-by-id-info-stock">
                In stock, ready to ship
              </span>
              <span className="product-by-id-info-express">
                1-2 day FedEx Express
              </span>
              <span className="product-by-id-info-order">
                <BsBoxSeam style={{position:"relative", top: '2px'}} /> Order now, Pay later
              </span>
            </div>

            <button onClick={() => getProductToCart(productById)} className="product-by-id-info-button-add-cart">
              Add to the Cart
            </button>
          </article>

        </>
      }
    </section>
  )
}
