// ChildAdd.jsx
import React, { useState } from 'react';

const ChildAdd = ({ onProductAdded }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Product Added:', { productName, productPrice });

    // Check if onProductAdded is a function
    if (typeof onProductAdded === 'function') {
      onProductAdded();
    } else {
      console.error('onProductAdded is not a function', onProductAdded);
    }

    setProductName('');
    setProductPrice('');
  };

  return (
    <div className="product-form">
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Product Price:</label>
          <input
            type="number"
            id="productPrice"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default ChildAdd;
