import React from "react";
import "./sidebar.css";

const SideBar = props => {
  const { service } = props.state;

  return (
    <div className="side-bar">
      <div className="card">
        <img src={service.image} alt="hall" className="imageCard" />
        <h3 className="card-typing">{service.name}</h3>
        <p className="card-typing">{service.capacity}</p>
        <p className="card-typing">{service.equipment}</p>
        <div className="agenda-colors">
          <div className="color-typing">
            <div className="blue" />
            <p className="agenda-prop">approved</p>
          </div>
          <div className="color-typing">
            <div className="yellow" />
            <p className="agenda-prop">pending</p>
          </div>
        </div>
      </div>
      <div className="line" />
    </div>
  );
};
export default SideBar;
