import React, { useState } from "react";
import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setVisible(!visible)} className="open">
        Open
      </button>
      {visible && (
        <div className="gif">
          <iframe
            src="https://giphy.com/embed/YRcXl6VfNhCorklI0R"
            width="480"
            height="270"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
            className="gif"
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default App;
