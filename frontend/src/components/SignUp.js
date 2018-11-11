import React, { Component } from "react";
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

  handlesubmit = () => {
    axios.post("/users/addUser", {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      usearname: this.state.username,
      password: this.state.password
    });
  };

  render() {
    return (
      <div>
        First Name: <input type="text" name="first" />
        <br />
        Last Name: <input type="text" name="last" />
        <br />
        Username: <input type="text" name="username" />
        <br />
        Password: <input type="text" name="password" />
        <br />
        Confirm Password: <input type="text" name="confirm_password" />
        <br />
        <input type="submit" value="Sign Up" />
      </div>
    );
  }
}
export default SignUp;
