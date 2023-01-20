import React from 'react';
import { useState } from 'react';
import Header from './Components/Header';
import './App.css';

function App() {
  const [value, setValue] = useState(0);

  function handleClick(from) {

    if (from === "Dashboard")
      setValue(1);

    if (from === "Employee")
      setValue(2);
  }

  return (
    <div className="App">
      <button onClick={() => handleClick("Dashboard")}>Dashboard</button>
      <button onClick={() => handleClick("Employee")}>Employee</button>
      <Header value={value} />
    </div>
  );
}

export default App;
