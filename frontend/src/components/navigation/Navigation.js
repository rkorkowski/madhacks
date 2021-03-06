import React from 'react';

import '../drawerToggleButton/DrawerToggleButton';
import './Navigation.css';
import DrawerToggleButton from '../drawerToggleButton/DrawerToggleButton';

const Navigation = props => {
    return (
    <header className="navbar">
        <nav className="navbar_navigation">
            <div className="navbar_button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="navbar_logo">
                <a href="/">
                    <img src={require("../../images/subLogo.png")} width='60px' height='60'></img>
                    &nbsp; Subscription Tracker
                </a>
            </div>
            <div className="spacer" />
            <div className="navbar_items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/subscriptions">Subscriptions</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
            
        </nav>

    </header>
    );
};

export default Navigation;