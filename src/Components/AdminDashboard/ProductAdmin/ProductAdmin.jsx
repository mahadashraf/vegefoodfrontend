import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { ellipsisVertical } from 'ionicons/icons';
import './ProductAdmin.css';
import Popup from '../../Category/PopUp/Popup';
 // Assuming you have a Popup component for delete confirmation

const ProductAdmin = () => {
  const calculatePercentage = (number, percentage) => (number * (percentage / 100)).toFixed(2);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);

  useEffect(() => {
    fetchProductData();
    fetchCategories();
  }, []);

  const fetchProductData = () => {
    axios.get('http://localhost:5100/getImage')
      .then(res => setProducts(res.data))
      .catch(err => console.log('Fetch Error:', err));
  };

  const fetchCategories = () => {
    const fetchedCategories = ['Vegetables', 'Fruits', 'Juice'];
    setCategories(fetchedCategories);
  };

  const handleProductClick = (id) => {
    navigate(`/admindashboard/singleproduct/${id}`);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories(prevCategories =>
      prevCategories.includes(category)
        ? prevCategories.filter(c => c !== category)
        : [...prevCategories, category]
    );
  };

  const filteredProducts = selectedCategories.length === 0
    ? products
    : products.filter(product =>
        selectedCategories.includes(product.productCategory)
      );

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);


  const handleDelete = (id) => {
    axios.delete(`http://localhost:5100/deleteUser/${id}`)
      .then(res => {
        // Update the products state by filtering out the deleted product
        const updatedProducts = products.filter(product => product._id !== id);
        setProducts(updatedProducts);
  
    
      })
      .catch(err => console.log(err));
  };
  
  const handleHide = (id) => {
    axios.put(`http://localhost:5100/hideProduct/${id}`)
      .then(res => {
        fetchProductData(); // Refetch data to update the displayed products
      })
      .catch(err => console.log(err));
  };

  const handleMenuClick = (id) => {
    setShowMenu(id === showMenu ? null : id);
  };

  const handlePopupConfirm = (action) => {
    if (action === 'delete') {
      handleDelete(currentProductId);
    } else if (action === 'hide') {
      handleHide(currentProductId);
    }
    setShowPopup(false); // Close popup after action
  };

  const openPopup = (id) => {
    setCurrentProductId(id); // Set the current product ID
    setShowPopup(true); // Show the popup
  };


  return (
    <div className="productdashboard">
      <div className="dashboard-header">
        <h2>Products</h2>
        <div className="filters">
          <div className="addformadmin">
            <Link to="/admindashboard/addproduct" className="adminaddform"> Add Product</Link>
          </div>
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleDropdown}>
              Filter by Category
            </button>
            {dropdownOpen && (
              <div className="dropdown-content">
                {categories.map((category, index) => (
                  <label key={index} className="checkbox-container">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                    {category}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="product-grid">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map(product => {
            const { productPrice, productSalePrice, _id, productName, image, colors } = product;
            const salePrice = productSalePrice > 0 
              ? (productPrice - calculatePercentage(productPrice, productSalePrice)).toFixed(2)
              : null;

            return (
              <div className="product-card" key={_id}>
                <div className="menu-icon-container">
                  <IonIcon
                    icon={ellipsisVertical}
                    className="more-icon"
                    onClick={() => handleMenuClick(_id)} 
                  />
                  {showMenu === _id && (
                    <div className="menu-dropdown">
                      <Link to={`/admindashboard/adminupdate/${_id}`}>Update</Link>
                      <button className="btn btn-danger" onClick={() => openPopup(_id)}>Remove</button>
                    </div>
                  )}
                </div>
                <img src={`http://localhost:5100/Images/${image}`} alt={productName} className="product-image" />
                <div className="product-info">
                  <p 
                    className="product-name" 
                    onClick={() => handleProductClick(_id)}
                  >
                    {productName}
                  </p>
                  <div className="product-colors">
                    {colors && colors.map((color, index) => (
                      <span key={index} className="color-dot" style={{ backgroundColor: color }}></span>
                    ))}
                  </div>
                  <div className="product-price2">
                    {salePrice ? (
                      <>
                        <span className="original-price2">${productPrice}.00</span>
                        <span className="sale-price2">${salePrice}</span>
                      </>
                    ) : (
                      <span>${productPrice}.00</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No products available.</p>
        )}
      </div>
      {showPopup && (
        <Popup
          onConfirm={handlePopupConfirm}
          onCancel={() => setShowPopup(false)}
        />
      )}
    </div>
  );
};

export default ProductAdmin;
