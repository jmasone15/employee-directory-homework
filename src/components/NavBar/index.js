import React from 'react';
import "./style.css"

function NavBar() {
    return (
        <nav className="navbar sticky-top navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Employee Directory</a>
            </div>
        </nav>
    )
};

export default NavBar;
