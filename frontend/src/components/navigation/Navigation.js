import React from 'react';

import './DrawerToggleButton';
import './Navigation.css';
import DrawerToggleButton from './DrawerToggleButton';

const Navigation = props => {
    return (
    <header className="navbar">
        <nav className="navbar_navigation">
            <div className="navbar_button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="navbar_logo"><a href="/">LogoLinkToHome</a></div>
            <div className="spacer" />
            <div className="navbar_items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/subscriptions">Subscriptions</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </div>
            
        </nav>

    </header>
    );
};

export default Navigation;