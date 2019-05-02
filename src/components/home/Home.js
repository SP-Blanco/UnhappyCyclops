import React, { Component } from "react";
import stewFace from "../../Stew_1.png";
import "../../App.css";
class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="mainContainer">
          <header>
            <div className="title">The Unhappy Cyclops</div>
            <div className="headerButton">Get to know us</div>
            <div className="headerButton">Episodes</div>
            <div className="headerButton">Hit us up</div>
          </header>
          <img alt="" className="stewFace" src={stewFace} />
        </div>
      </div>
    );
  }
}

export default Home;
