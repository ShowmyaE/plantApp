import React from 'react';
import './Modal.css';

const AddToCartModal = ({ product, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>${product.price}</p>
        <button onClick={onClose}>Close</button>
        <button onClick={() => alert(`Added ${product.name} to cart!`)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default AddToCartModal;