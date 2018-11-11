import React from "react";

const Login = () => {
  return (
    <div>
      Username: <input type="text" placeholder="Username" name="username" />
      <br />
      Password: <input type="text" placeholder="Password" name="password" />
      <br />
      <input type="submit" name="Sign in" value="Sign In" />
    </div>
  );
};

export default Login;
