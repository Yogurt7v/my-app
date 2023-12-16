import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{value}</h2>
      <div className="buttons">
        <button className="buttonPlus" onClick={() => setValue(value + 1)}>
          Increment
        </button>
        <button className="buttonMinus" onClick={() => setValue(value - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
