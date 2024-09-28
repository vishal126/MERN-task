// DataContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState("Initial data");

  // Pass the data and setter function so it can be modified by other components
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
