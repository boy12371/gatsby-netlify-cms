import React from "react";

import Menu from "./Menu";
import Logo from "./Logo";

const Navbar: React.FC = () => (
    <nav className="navbar">
        <div className="container">
            <div className="navbar-brand">
                <Logo />
            </div>
            <div className="navbar-start">
                <Menu />
            </div>
        </div>
    </nav>
);

export default Navbar;
