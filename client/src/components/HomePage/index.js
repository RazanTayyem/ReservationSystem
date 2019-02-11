import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>HomePage</h1>;
        <h3>
          <Link to="/hall">Go to Hall Page</Link>
        </h3>
      </div>
    );
  }
}

export default HomePage;
