import React from "react";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <h1 className="logo">Moview Review App</h1>
            <nav>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;