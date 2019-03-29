import React, { FC } from "react";
import { Icon } from "antd";

interface IconProp {
    icon: string;
}

const IconItem: FC<IconProp> = ({ icon }) => {
    return (
        <div className="icon">
            <Icon type={icon} />
            <br />
            <span>{icon}</span>
        </div>
    );
};

export default IconItem;
