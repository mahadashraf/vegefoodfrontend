import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminAddForm.css';

export const AdminAddForm = () => {
  const [file, setFile] = useState(null);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productSalePrice, setProductSalePrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const [, setProducts] = useState([]); // Initialize as an array
  const [warning, setWarning] = useState(''); // State for warning message
  const [success, setSuccess] = useState(''); // State for success message

  const handleUpload = (event) => {
    event.preventDefault(); // Prevent form from submitting the traditional way

   

    if (!file || !productName || !productPrice || !productSalePrice || !productCategory || !productDescription) {
      setWarning('Please complete all fields and select an image.');
      return; // Stop further execution if validation fails
    }

    const formdata = new FormData();
    formdata.append('file', file);
    formdata.append('productName', productName);
    formdata.append('productPrice', parseFloat(productPrice)); // Convert to number
    formdata.append('productSalePrice', parseFloat(productSalePrice)); // Convert to number
    formdata.append('productCategory', productCategory);
    formdata.append('productDescription', productDescription);

    axios.post('http://localhost:5100/upload', formdata)
      .then(res => {
        console.log('Upload Response:', res.data); // Check the response structure
        fetchProductData();
        setWarning(''); // Clear warning on successful upload
        setSuccess('Inserted successfully!'); // Set success message
        setTimeout(() => {
          setSuccess(''); // Clear success message after a few seconds
        }, 2000); // Adjust the delay as needed
      })
      .catch(err => {
        console.log('Upload Error:', err);
        setWarning('An error occurred while uploading.'); // Set warning on error
      });
  };

  const fetchProductData = () => {
    axios.get('http://localhost:5100/getImage')
      .then(res => {
        console.log('Fetched Data:', res.data); // Check the data structure
        setProducts(res.data); // Set the entire array
      })
      .catch(err => console.log('Fetch Error:', err));
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="body-container">
      <div className="admin-form-container">
        <div className="formm-container">
          <div className="leftt-container">
            <div className="left-inner-container">
              <h2 className='left-inner-heading'>Vege Foods</h2>
            </div>
          </div>

          <div className="right-container">
            <div className="right-inner-container">
              <form onSubmit={handleUpload}>
                <h2 className="lg-view">Product Form</h2>
                <br />
                <br />
                
                {warning && <div className="warning-message">{warning}</div>}
                {success && <div className="success-message">{success}</div>}

                <input
                  type="text"
                  className="product-form-input"
                  placeholder="Product Name"
                  value={productName}
                  onChange={e => setProductName(e.target.value)}
                />
                <input
                  type="text"
                  className="product-form-input"
                  placeholder="Product Price"
                  value={productPrice}
                  onChange={e => setProductPrice(e.target.value)}
                />
                <input
                  type="text"
                  className="product-form-input"
                  placeholder="Product Sale Price"
                  value={productSalePrice}
                  onChange={e => setProductSalePrice(e.target.value)}
                />
                <input
                  type="text"
                  className="product-form-input"
                  placeholder="Product Category"
                  value={productCategory}
                  onChange={e => setProductCategory(e.target.value)}
                />
                <input
                  type="text"
                  className="product-form-input"
                  placeholder="Product Description"
                  value={productDescription}
                  onChange={e => setProductDescription(e.target.value)}
                />

                <input
                  type="file"
                  className="product-form-input"
                  onChange={e => setFile(e.target.files[0])}
                />
                <br />
                <br />
                <br />
                <button className="product-form-button" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
