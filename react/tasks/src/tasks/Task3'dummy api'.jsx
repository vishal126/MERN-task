import React from 'react'
import ProductCard from './ProductCard3';
import { useState, useEffect } from 'react';

const Task3 = () => {
    const [products, setProducts] = useState([]); 
    const [counter, setCounter] = useState(0); 
  
    useEffect(() => {
      fetch('https://dummyjson.com/products')
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.products);
        })
        .catch((error) => {
          console.error("Error fetching the products data:", error);
        });
    }, []);
  
    const handleIncrement = () => {
      setProducts((prevProducts) =>
        prevProducts.map((product) => ({
          ...product,
          price: product.price + 10,
        }))
      );
      setCounter((prevCounter) => prevCounter + 1);
    };
  
    return (
      <div>
        <h1>Product Page</h1>
        <button onClick={handleIncrement}>Increment Prices</button>
        <p>Button Clicked {counter} times</p>
  
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
}

export default Task3;