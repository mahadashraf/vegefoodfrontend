import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './SingleProduct.css';
import { IonIcon } from '@ionic/react';
import { cartOutline } from 'ionicons/icons';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);


  useEffect(() => {
    axios.get(`http://localhost:5100/GetProducts/${id}`)
      .then(response => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product data:', error.response || error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

 

  const incrementQuantity = () => setQuantity(prevQuantity => prevQuantity + 1);
  const decrementQuantity = () => setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));

  if (loading) return <p>Loading...</p>;
  if (error) return <h1 className='Error-Page'>Page 404 Error</h1>;

  return (
    <div className="product-page">
      <a href="/"><h1 className="page-heading">VegeFood</h1></a>
      {product && (
        <div className="product-container">
          <div className="product-gallery">
            <img
              src={`http://localhost:5100/Images/${product.image}`}
              alt={product.productName}
              className="main-image"
            />
            <div className="thumbnail-gallery">
              <img src={`http://localhost:5100/Images/${product.image}`} alt="Thumbnail 1" />
              <img src={`http://localhost:5100/Images/${product.image}`} alt="Thumbnail 2" />
              <img src={`http://localhost:5100/Images/${product.image}`} alt="Thumbnail 3" />
            </div>
          </div>
          <div className="product-details">
            <p className="company-name">{product.productCategory}</p>
            <h1 className="product-title">{product.productName}</h1>
            <p className="product-description">{product.productDescription}</p>
            <div className="pricing">
              <span className="product-pricee">${product.productPrice}</span>
            </div>
            <div className="quantity-selector">
              <button className='quantity-button' onClick={decrementQuantity}>-</button>
              <span>{quantity}</span>
              <button className='quantity-button' onClick={incrementQuantity}>+</button>
              <button className="add-to-cart-button">
                <IonIcon icon={cartOutline} className="cart-icon" />
                Add to Cart
              </button>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
