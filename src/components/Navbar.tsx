import * as React from "react";
import { Link } from "gatsby";
import { Menu } from "antd";
import { NavProps } from "../common/interfaces/NavComp";

const Navbar: React.FC<NavProps> = ({ navItems }) => {
    return (
        <Menu mode="horizontal">
            {navItems.map((item, index) => (
                <Menu.Item key={index}>
                    <Link key={index} to={`/${item.path}`}>
                        {item.title}
                    </Link>
                </Menu.Item>
            ))}
        </Menu>
    );
};

export default Navbar;
