import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/Contact/Contact";

export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/contact" exact component={Contact} />
  </Switch>
);
