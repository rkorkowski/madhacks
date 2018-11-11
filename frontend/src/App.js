import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './components/Home';
import Subscriptions from './components/Subscriptions';
import Error from './components/Error';

import Navigation from './components/navigation/Navigation';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Backdrop from './components/backdrop/Backdrop';

import SubscriptionTable from './components/SubscriptionTable';
import './App.css';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <BrowserRouter>
        <div style={{height: '100%'}}>
          <Navigation drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <SubscriptionTable />
            <div className="main">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/subscriptions" component={Subscriptions} />
              <Route component={Error} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
