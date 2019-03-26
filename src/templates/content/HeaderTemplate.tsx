import React from "react";

import { HeaderTemplateProps } from "../../common/interfaces/HeaderComp";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";

const HeaderTemplate: React.FC<HeaderTemplateProps> = ({ isLogo, logoItem, isNav, navItems }) => {
    let logoElement: JSX.Element = <></>;
    if (isLogo) {
        logoElement = (
            <div className="navbar-brand">
                <Logo title={logoItem.title} image={logoItem.image} path={logoItem.path} />
            </div>
        );
    }
    let navElement: JSX.Element = <></>;
    if (isNav) {
        navElement = (
            <div className="navbar-start">
                <Navbar navItems={navItems} />
            </div>
        );
    }
    return (
        <nav className="navbar">
            <div className="container">
                {logoElement}
                {navElement}
            </div>
        </nav>
    );
};

export default HeaderTemplate;
