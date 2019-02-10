import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Calendar from "./components/Calendar";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Calendar />
        <h1>Reservation System!</h1>
      </div>
    );
  }
}

export default App;
