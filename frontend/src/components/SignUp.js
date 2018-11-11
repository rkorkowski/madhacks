import React from "react";

const SignUp = () => {
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
};

export default SignUp;
