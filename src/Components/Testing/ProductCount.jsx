// ProductCount.jsx
import React from 'react';

const ProductCount = ({ count }) => {
  console.log('Product Count Display Count:', count);
  return (
    <div className="product-count-display">
      <h4>Total Products Added: {count}</h4>
    </div>
  );
};

export default ProductCount;
