import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="mainContainer">
          <header>
            <div className="title">The Unhappy Cyclops</div>
            <div className="headerButton">Get to know us</div>
            <div className="headerButton">Episodes</div>
            <Link className="headerButton" to="/contact">
              Hit us up
            </Link>
          </header>
          {routes}
        </div>
      </div>
    </Router>
  );
}

export default App;
