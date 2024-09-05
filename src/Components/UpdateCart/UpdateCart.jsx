import React, { useState } from 'react';
import Category from '../Category/Category'; // Adjust path as needed
import ProductTable from '../ProductTable/ProductTable'; // Adjust path as needed

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <Category onProductSelect={handleProductSelect} />
      <ProductTable selectedProduct={selectedProduct} />
    </div>
  );
};

export default App;
