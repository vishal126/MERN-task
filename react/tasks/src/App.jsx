import React from 'react'
import Task1 from './tasks/Task1(props card)'
import Task2 from './tasks/Task2\'product json data\'';
import Task3 from './tasks/Task3\'dummy api\'';

function App() {
  //task2
  const productData = [
    {
      productName: "Smartphone",
      productPrice: 599.99,
      productDescription: "A high-end smartphone with a 6.5-inch display, 128GB storage, and 48MP camera."
    },
    {
      productName: "Laptop",
      productPrice: 899.99,
      productDescription: "A lightweight laptop with 16GB RAM, 512GB SSD, and a 14-inch screen."
    },
    {
      productName: "Headphones",
      productPrice: 199.99,
      productDescription: "Noise-cancelling wireless headphones with 30 hours of battery life."
    },
    {
      productName: "Smartwatch",
      productPrice: 299.99,
      productDescription: "A sleek smartwatch with fitness tracking and a customizable display."
    }
  ];

  return (
    <div>
      <Task1 text = {'vishal'} image = {''}/>
      <Task2 products={productData} />
      <Task3 />
    </div>
  )
}

export default App