import React from 'react';
import { useParams } from 'react-router-dom';
import './ThankYou.css';

const ThankYouPage = () => {
  const { productId } = useParams();

  return (
    <div className="thank-you-page">
      <h1>Thank you for your interest in Product {productId}!</h1>
    </div>
  );
};

export default ThankYouPage;