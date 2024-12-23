import React, { useState } from "react";
import "./Nav.css";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className="nav">
                <div className="nav-img">
                    <img src='icon.png' alt="Logo" />
                </div>
                <div className={`nav-content ${isMenuOpen ? "active" : ""}`}>
                    <button className="nav-button"><a href="#">Home</a></button>
                    <button className="nav-button"><a href="#">Why Us?</a></button>
                    <button className="nav-button"><a href="#">About Us</a></button>
                    <button className="nav-button"><a href="#">FAQs</a></button>
                    <button className="nav-button"><a href="#">Our Services</a></button>
                    <button className="nav-button"><a href="#">Contact</a></button>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
