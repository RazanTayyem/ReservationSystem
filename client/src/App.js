import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Calendar from "./components/Calendar";
// import HomePage from "./components/HomePage";
// import Hall from "./components/Hall";
import Login from './components/Login/login';
// import BookEvent from "./components/BookEvent";
// import DetailsEvent from "./components/DetailsEvent";



class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Login} />
          <Route exact path="/events" component={Calendar} />
      </React.Fragment>
      </Router>
    );
  }
}

export default App;
