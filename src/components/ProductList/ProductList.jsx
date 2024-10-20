import React, { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import Pagination from '../Pagination/Pagination';
import './ProductList.css';

const ProductList = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="product-list">
      {currentProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={products.length}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default ProductList;