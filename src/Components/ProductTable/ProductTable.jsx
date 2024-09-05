import React from 'react';

import './ProductTable.css';

export const ProductTable = () => {


  return (
    <div className='table-box'>
      <table className="product-table">
        <thead>
          <tr>
            <th></th>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
         
            <tr >
              <td>
                <button className="btn btn-danger" >
                  <span style={{ fontSize: '8px', lineHeight: '12px' }}>&#x2716;</span> 
                </button>
              </td>
              <td>
                <div className="product-info">
                  <img src="../product-1.jpg" width="50" loading="lazy" alt='product'/>
                  <div>
                    <h2>s</h2>
                    <p></p>
                  </div>
                  
                </div>
              </td>
              <td><p>Bell Pepper</p></td>
              <td><p>$180</p></td>
              <td>1</td>
              <td>$180</td>
            </tr>
      
        </tbody>
      </table>
    </div>
  );
};
