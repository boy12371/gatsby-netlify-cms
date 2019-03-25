import React from "react";

import { LayoutProps } from "../common/interfaces";
import "../styles/all.sass";

const Layout: React.FC<LayoutProps> = ({ children }) => (
    <div>
        <div>{children}</div>
    </div>
);

export default Layout;
