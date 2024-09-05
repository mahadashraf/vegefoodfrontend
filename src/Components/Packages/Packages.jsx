import React from 'react';
import './Packages.css';

export const Packages = ({ background }) => {
  return (
    <div className={`section-packages ${background}`}>
      <div className="packages-items">
        <div className="package-item">
          <div className="img-container">
            <div className="circlee">
              <div className="imgg-container">
                <img src="../shipping.png" alt="Free Shipping" width={50} />
              </div>
            </div>
          </div>
          <h3>FREE SHIPPING</h3>
          <p>ON ORDER OVER $100</p>
        </div>
        <div className="package-item">
          <div className="img-container">
            <div className="circlee">
              <div className="imgg-container">
                <img src="../diet.png" alt="Always Fresh" width={50} />
              </div>
            </div>
          </div>
          <h3>ALWAYS FRESH</h3>
          <p>PRODUCT WELL PACKAGE</p>
        </div>
        <div className="package-item">
          <div className="img-container">
            <div className="circlee">
              <div className="imgg-container">
                <img src="../medal.png" alt="Superior Quality" width={50} />
              </div>
            </div>
          </div>
          <h3>SUPERIOR QUALITY</h3>
          <p>QUALITY PRODUCTS</p>
        </div>
        <div className="package-item">
          <div className="img-container">
            <div className="circlee">
              <div className="imgg-container">
                <img src="../customer-service.png" alt="Support" width={50} />
              </div>
            </div>
          </div>
          <h3>SUPPORT</h3>
          <p>24/7 SUPPORT</p>
        </div>
      </div>
    </div>
  );
};
