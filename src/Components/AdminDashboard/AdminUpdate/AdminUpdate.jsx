import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminUpdate.css';

const AdminUpdate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('productName', product.productName);
    formData.append('productPrice', product.productPrice);
    formData.append('productSalePrice', product.productSalePrice);
    formData.append('productCategory', product.productCategory);
    formData.append('productDescription', product.productDescription);

    if (image) {
      formData.append('image', image);
    }

    axios.put(`http://localhost:5100/updateProduct/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      console.log('Product updated successfully:', response.data);
      navigate(`/admindashboard/singleproduct/${id}`);
    })
    .catch(error => {
      console.error('Error updating product:', error.response || error);
      setError(error);
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <h1 className='Error-Page'>Page 404 Error</h1>;

  return (
    <div className="body-containerr">
     <a href="/"> <h1 className="vegefood-logo">VegeFood</h1></a>
      <div className="admin-form-containerr">
        <div className="formm-containerr">
          <div className="leftt-containerr">
            <div className="left-inner-containerr">
              <h2 className='left-inner-headingg'>Vege Foods</h2>
            </div>
          </div>
  
          <div className="right-containerr">
            <div className="right-inner-containerr">
              <form onSubmit={handleSubmit}>
                <h2 className="lg-vieww">Update Product</h2>
                <br />
                <br />
  
                <input
                  type="text"
                  className="product-form-inputt"
                  placeholder="Product Name"
                  name="productName"
                  value={product?.productName || ''}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="product-form-inputt"
                  placeholder="Product Price"
                  name="productPrice"
                  value={product?.productPrice || ''}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="product-form-inputt"
                  placeholder="Product Sale Price"
                  name="productSalePrice"
                  value={product?.productSalePrice || ''}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="product-form-inputt"
                  placeholder="Product Category"
                  name="productCategory"
                  value={product?.productCategory || ''}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  className="product-form-inputt"
                  placeholder="Product Description"
                  name="productDescription"
                  value={product?.productDescription || ''}
                  onChange={handleInputChange}
                />
                <input
                  type="file"
                  className="product-form-inputt"
                  name="image"
                  onChange={handleImageChange}
                />
                <br />
                <br />
                <br />
                <button className="product-form-buttonn" type="submit">Update Product</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUpdate;
