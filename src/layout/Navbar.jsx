import React from 'react';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <img src="src/assets/streeteasy.png" alt="corporate logo for StreetEasy" />
            </div>
            <div className="navbar-menu">
                <li className="navbar-Rent"> Rent </li>
                <li className="navbar-Buy">Buy </li>
                <li className="navbar-Sell"> Sell</li>
                <li className="navbar-Buildings"> Buildings</li>
                <li className="navbar-Resources"> Resources</li>
                <li className="navbar-Blog"> Blog</li>
            </div>
        </div>
    );
};

export default Navbar;