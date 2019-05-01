import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <header>
          <div>The Unhappy Cyclops</div>
          <button>Get to know us</button>
          <button>Episodes</button>
          <button>Hit us up</button>
        </header>
        <img className="stewFace" src="./graffiti-wallpaper-12.jpg" />
      </div>
    </div>
  );
}

export default App;
