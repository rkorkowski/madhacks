import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/">Home</Link> &nbsp;
      <Link to="/subscriptions">Subscriptions</Link>
    </div>
  );
};

export default Navigation;
