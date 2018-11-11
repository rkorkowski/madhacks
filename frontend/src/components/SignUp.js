import React, { Component } from "react";

import "./SignUp.css";

const axios = require("axios");

class SignUp extends Component {
  constructor(props) {
    super(props);

    //initialize the state to empty strings
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: ""
    };
  }

  validateForm() {
    return (
      this.state.firstName.length > 0 &&
      this.state.lastName.length > 0 &&
      this.state.username.length > 0 &&
      this.state.password.length > 0
    );
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    console.log(this.state);
  };

  handleSubmit = event => {
    if (
      this.state.username === "admin" &&
      this.state.password === "password" &&
      this.state.firstName === "Hayden" &&
      this.state.lastName === "Pilsner"
    ) {
      const path = "/";
    }
    // axios.post("/users/addUser", {
    //   firstName: this.state.firstName,
    //   lastName: this.state.lastName,
    //   usearname: this.state.username,
    //   password: this.state.password
    // });
  };

  render() {
    return (
      <div>
        First Name:{" "}
        <input type="text" name="firstName" onChange={this.handleChange} />
        <br />
        Last Name:{" "}
        <input type="text" name="lastName" onChange={this.handleChange} />
        <br />
        Username:{" "}
        <input type="text" name="username" onChange={this.handleChange} />
        <br />
        Password:{" "}
        <input type="text" name="password" onChange={this.handleChange} />
        <br />
        Confirm Password:{" "}
        <input
          type="text"
          name="confirm_password"
          onChange={this.handleChange}
        />
        <br />
        <a href="/" className="button">
          Sign Up
        </a>
      </div>
    );
  }
}
export default SignUp;
