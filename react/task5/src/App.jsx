// App.js
import React from 'react';
import { DataProvider } from './DataContext';
import DataSender from './DataSender';
import DisplayComponent from './DisplayComponent';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <h1>Context API Example</h1>
        <DataSender />
        <DisplayComponent />
      </div>
    </DataProvider>
  );
}

export default App;
