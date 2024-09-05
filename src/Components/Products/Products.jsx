import React from 'react';
import './Products.css';

export const Products = () => {
  return (
    <div className="products-section">
      <div className="col-1">
        <div className="product-1">
          <div className="img-text">
            <img src="../category-1.jpg" alt="" width={340} height={240} />
            <div className="bottom-left"><a href="">Fruits</a></div>
          </div>
        </div>
        <div className="product-2">
          <div className="img-text">
            <img src="../category-2.jpg" alt="" width={340} />
            <div className="bottom-left"><a href="">Vegetables</a></div>
          </div>
        </div>
      </div>
      <div className="col-2">
        <div className="product-3">
          <h1>Vegetables</h1>
          <p>Protect the health of every home</p>
          <a href="#" className="shop">Shop Now</a>
        </div>
        <div className="product-4">
          <div className="img-text">
            <img src="../category.jpg" alt="" width={315} />
            
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="product-5">
          <div className="img-text">
            <img src="../category-3.jpg" alt="" width={340} />
            <div className="bottom-left"><a href="">Juices</a></div>
          </div>
        </div>
        <div className="product-6">
          <div className="img-text">
            <img src="../category-4.jpg" alt="" width={340} />
            <div className="bottom-left"><a href="">Dried</a></div>
          </div>
        </div>
      </div>
    </div>
  );
};
