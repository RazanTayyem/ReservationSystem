import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import Hall from "./components/Hall";
import Header from './components/Header/header';

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Header />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hall" component={Hall} />
        </div>
      </Router>
    );
  }
}

export default App;
