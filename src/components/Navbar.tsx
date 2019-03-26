import React from "react";
import { Link } from "gatsby";
import { NavProps } from "../common/interfaces/NavComp";

const Navbar: React.FC<NavProps> = ({ navItems }) => {
    return (
        <div className="navbar-start">
            {navItems.map((item, index) => (
                <Link key={index} className="navbar-item" to={`${item.path}`}>
                    {item.title}
                </Link>
            ))}
        </div>
    );
};

export default Navbar;
