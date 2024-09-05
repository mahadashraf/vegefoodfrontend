import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonIcon } from '@ionic/react';
import { menuOutline, cartOutline, heartOutline } from 'ionicons/icons';
import './ShopCategory.css';

export const ShopCategory = () => {
  const [products2, setProducts] = useState([]);
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetchProductData();
  }, []);

  const fetchProductData = () => {
    axios.get('http://localhost:5100/getImage')
      .then(res => {
        console.log('Fetched Data:', res.data);
        setProducts(res.data);
      })
      .catch(err => console.log('Fetch Error:', err));
  };

  const handleFilterChange = (category) => {
    setFilter(category);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const filteredCategories = products2.filter((product) => {
    if (filter === 'All') return true;
    return product.productCategory === filter;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCategories.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

  const calculateSalePrice = (price, discount) => {
    return price - (price * discount / 100);
  };

  return (
    <div className="category-section">
      <div className="filter-buttons">
        <ul className='filter-button'>
          <li><button onClick={() => handleFilterChange('All')} style={{ backgroundColor: filter === 'All' ? '#82ae46' : 'white', color: filter === 'All' ? 'white' : '#82ae46'}}>All</button></li>
          <li><button onClick={() => handleFilterChange('Vegetables')} style={{ backgroundColor: filter === 'Vegetables' ? '#82ae46' : 'transparent', color: filter === 'Vegetables' ? 'white' : '#82ae46' }}>Vegetables</button></li>
          <li><button onClick={() => handleFilterChange('Fruits')} style={{ backgroundColor: filter === 'Fruits' ? '#82ae46' : 'transparent', color: filter === 'Fruits' ? 'white' : '#82ae46'}}>Fruits</button></li>
          <li><button onClick={() => handleFilterChange('Juice')} style={{ backgroundColor: filter === 'Juice' ? '#82ae46' : 'transparent', color: filter === 'Juice' ? 'white' : '#82ae46'}}>Juice</button></li>
        </ul>
      </div>

      <br />
      <br />
      <br />

      <div className="container-category">
        {currentItems.map((product) => {
          const salePrice = product.productSalePrice > 0 
            ? calculateSalePrice(product.productPrice, product.productSalePrice).toFixed(2)
            : product.productPrice.toFixed(2);
          const discountPercentage = product.productSalePrice > 0 ? product.productSalePrice.toFixed(0) : null;

          return (
            <div className="category-item" key={product._id}>
                 {discountPercentage && (
                <div className="discount-tag">
                  {discountPercentage}%
                </div>
              )}
              <img src={`http://localhost:5100/Images/${product.image}`} alt={product.productName} className="product-table-img" width={220} />
              
              <p>{product.productName}</p>
              <div className="pricess">
                <span className={`original-price ${product.productSalePrice > 0 ? 'discounted' : ''}`}>
                  ${product.productPrice.toFixed(2)}
                </span>

                {product.productSalePrice > 0 && (
                  <span className='sale-price'>
                    ${salePrice}
                  </span>
                )}
              </div>
              <div className="icons">
                <IonIcon icon={menuOutline} className="icon" />
                <IonIcon icon={cartOutline} className="icon" />
                <IonIcon icon={heartOutline} className="icon" />
              </div>
            </div>
          );
        })}
      </div>

      <br />
      <br />

      <div className="pagination">
        <button className='prev-button' onClick={handlePrevPage} disabled={currentPage === 1}>&lt;</button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button className='item-button'
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            style={{ backgroundColor: currentPage === index + 1 ? '#82ae46' : 'white', color: currentPage === index + 1 ? 'white' : 'black'}}
          >
            {index + 1}
          </button>
        ))}
        <button className='next-button' onClick={handleNextPage} disabled={currentPage === totalPages}>&gt;</button>
      </div>
    </div>
  );
};

export default ShopCategory;
