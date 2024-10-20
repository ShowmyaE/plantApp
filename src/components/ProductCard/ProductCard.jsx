import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddToCartModal from '../AddToCardModal/AddToCardModal';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/thank-you/${product.id}`);
  };

  const handleAddToCart = () => {
    setModalVisible(true);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.text}</p>
      <p>${product.price}</p>
      <button onClick={handleViewProduct}>Buy on Rent</button>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {modalVisible && <AddToCartModal product={product} onClose={() => setModalVisible(false)} />}
    </div>
  );
};

export default ProductCard;