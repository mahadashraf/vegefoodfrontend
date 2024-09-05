// src/components/ConfirmationPopup.jsx
import React from 'react';
import './Popup.css';

const Popup = ({ onConfirm, onCancel }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h2 className="popup-heading">Remove Product</h2>
        <p>Are you sure you want to delete or Hide this Product ?</p>
        <div className="popup-buttons">
          <button className="btn btn-dangerr" onClick={() => onConfirm('delete')}>Delete</button>
          <button className="btn btn-secondary" onClick={() => onConfirm('hide')}>Hide</button>
          <button className="btn btn-light" onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
