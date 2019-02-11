import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Calendar from "./components/Calendar";
import HomePage from "./components/HomePage";
import Hall from "./components/Hall";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hall" component={Hall} />
        </div>
      </Router>
    );
  }
}

export default App;
