import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/header";
import NavBar from "../NavBar";
import axios from "axios";
import "./HomePage.css";

class HomePage extends Component {
  state = {
    loading: false
  };

  componentDidMount() {
    axios
      .get("/service")
      .then(({ data }) => {
        const services = data.map(service => {
          return {
            id: service.id,
            image_url: service.image,
            name: service.name
          };
        });
        this.setState({
          services,
          loading: true
        });
      })
      .catch(() => {
        const { history } = this.props;
        history.push("/error");
      });
  }

  render() {
    if (this.state.loading === true) {
      return (
        <div>
          <div className="home-nav-bar">
            <NavBar />
          </div>
          <div className="headerHolder">
            <Header />
            <div className="tab-container">
              <div className="buttons-container">
                <input type="button" value="Halls" className="hallsBtn" />
                <input type="button" value="Stage" className="stageBtn" />
                <input type="button" value="Yards" className="stageBtn" />
                <input type="button" value="Hostels" className="stageBtn" />
              </div>
              <div className="tab-line" />
            </div>
          </div>
          <div className="all-halls">
            <div className="halls-row">
              <div className="hall-container">
                <div className="image-container" />
                <input
                  type="button"
                  value="Co-working Space 1"
                  className="hallBtn"
                />
              </div>
              <div className="hall-container">
                <div className="image-container" />
                <input
                  type="button"
                  value="Co-working Space 2"
                  className="hallBtn"
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>loading...</h1>;
    }
  }
}

export default HomePage;
