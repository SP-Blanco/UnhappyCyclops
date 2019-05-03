import React, { Component } from "react";
import stewFace from "../../Stew_1.png";
import "../../App.css";
class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <img alt="" className="stewFace" src={stewFace} />;
  }
}

export default Home;
