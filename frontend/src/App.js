import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Subscriptions from "./components/Subscriptions";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/subscriptions" component={Subscriptions} />
            <Route path="/login" component={Login} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
