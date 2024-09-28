import React from 'react';

const ProductCard3 = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px', width: '250px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductCard3;
