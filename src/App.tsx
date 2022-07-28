import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [result, setResult] = useState("HELLO");

  return (
    <div className="App">
        <h1>
        {result}
        </h1>
      
    </div>
  );
}

export default App;
