import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Category.css';
import { IonIcon } from '@ionic/react';
import { menuOutline, cartOutline, heartOutline } from 'ionicons/icons';
import { useCart } from '../Cart/CartContext';
import { Link } from 'react-router-dom';

const calculatePercentage = (number, percentage) => (number * (percentage / 100)).toFixed(2);
const getRandomProducts = (products, count = 8) => products.sort(() => 0.5 - Math.random()).slice(0, count);

export const Category = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const interval = setInterval(() => {
        setDisplayedProducts(getRandomProducts(products));
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [products]);
  const fetchProductData = () => {
    axios.get('https://vegefoodbackend.vercel.app/api/getImage')
      .then(res => {
        setProducts(res.data);
        setDisplayedProducts(getRandomProducts(res.data));
      })
      .catch(err => console.log('Fetch Error:', err));
  };
  

  return (
    <div className="category-section">
      <div className="heading-text">
        <h2>Featured Products</h2>
        <span className='subheading'>Our Products</span>
        <p>Far far away, behind the word mountains...</p>
        <div className="view-all-container">
          <Link to="/shop" className="view-all-button">View All</Link>
        </div>
      </div>

      <div className="container-category">
        {displayedProducts.map((product) => {
          const { productPrice, productSalePrice, _id, productName, image } = product;
          const salePrice = productSalePrice > 0 
            ? (productPrice - calculatePercentage(productPrice, productSalePrice)).toFixed(2)
            : productPrice;
          const discountPercentage = productSalePrice > 0 ? productSalePrice.toFixed(0) : null;

          return (
            <div className="category-item fade-in" key={_id}>
              {discountPercentage && (
                <div className="discount-tag">
                  {discountPercentage}%
                </div>
              )}
              <img src={`http://localhost:5100/Images/` + image} alt={productName} className="product-table-img" width={220} />
              <p>{productName}</p>
              <div className="pricess">
                <span className={`original-price ${productSalePrice > 0 ? 'discounted' : ''}`}>
                  ${productPrice}.00
                </span>
                {productSalePrice > 0 && (
                  <span className='sale-price'>
                    ${salePrice}
                  </span>
                )}
              </div>
              <div className="icons">
                <IonIcon icon={menuOutline} className="icon" />
                <IonIcon
                  icon={cartOutline}
                  className="icon"
                  onClick={() => addToCart(product)} // Pass product to addToCart
                />
                <IonIcon icon={heartOutline} className="icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
