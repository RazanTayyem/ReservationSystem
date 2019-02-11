import React, { Component } from "react";
import './login.css';
import Logobig from './logobig.png';


class Login extends Component {
  handleChange(event) {
    this.setState({title: event.target.value})
  }
  render() {

return(
  <div className="login">
    <img  className="photo"src={Logobig} alt="logo" width="30%" height="370px"/>

    <form onChange={this.handleChange.bind(this)} action ="/login" method="post">
    <div className="form">
    <input type="text" id="login" class="fadeIn second" name="login" placeholder="username"/>
    <input type="text" id="password" class="fadeIn third" name="password" placeholder="password"/>
    </div>
    <button  className="btn1"type="submit">Log in</button>

      </form>
  </div>
)
}
}
export default Login;
