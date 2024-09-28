// DisplayComponent.js
import React, { useContext } from 'react';
import { DataContext } from './DataContext';

const DisplayComponent = () => {
  const { data } = useContext(DataContext);

  return (
    <div>
      <h2>Data from Context:</h2>
      <p>{data}</p>
    </div>
  );
};

export default DisplayComponent;
