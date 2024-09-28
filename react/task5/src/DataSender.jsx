// DataSender.js
import React, { useState, useContext } from 'react';
import { DataContext } from './DataContext';

const DataSender = () => {
  const [inputValue, setInputValue] = useState('');
  const { setData } = useContext(DataContext);

  const sendData = () => {
    // Set the context data to the input value
    setData(inputValue);
  };

  return (
    <div>
      <h2>Send Data to Context</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter data"
      />
      <button onClick={sendData}>Send Data</button>
    </div>
  );
};

export default DataSender;
