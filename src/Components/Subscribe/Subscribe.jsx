import React from 'react';
import "./Subscribe.css";

export const Subscribe = ({ background }) => {
  return (
    <div className={`subscribe-section ${background}`}>
      <div className="one-container">
      <div className="textt-div">
        <span className="headingg">Subscribe to Our Newsletter</span>
        <p className='subheadingg'>Get e-mail updates about our latest shops and special offers</p>
      </div>
      <div className="custom-search">
        <input type="text" className="custom-search-input" placeholder="Enter email address" />
        <button className="custom-search-button" type="submit">Subscribe</button>
      </div>
      </div>
    </div>
  );
};
