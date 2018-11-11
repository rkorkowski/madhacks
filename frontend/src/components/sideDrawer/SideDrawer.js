import React from 'react';

import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side_drawer';
    if(props.show) {
        drawerClasses = 'side_drawer open';
    }
    return (
    <nav className={drawerClasses} >
        <div className="navbar_logo_drawer"><a href="/">LogoLinkToHome</a></div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/subscriptions">Supscriptions</a></li>
            <li><a href="/">Login</a></li>
        </ul>
    </nav>
    );
};

export default SideDrawer;