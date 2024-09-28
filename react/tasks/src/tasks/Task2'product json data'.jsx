import React from 'react'

const Task2 = ({ products }) => {
    return (
        <div>
          {products.map((product, index) => (
            <div key={index} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
              <h2>{product.productName}</h2>
              <p>Price: ${product.productPrice}</p>
              <p>Description: {product.productDescription}</p>
            </div>
          ))}
        </div>
      );
}

export default Task2;