import React, { FC } from "react";
import { Icon } from "antd";

interface IconProps {
    type: string;
    scriptUrl: string;
}

const IconFont: FC<IconProps> = ({ type, scriptUrl }) => {
    const FontCN = Icon.createFromIconfontCN({
        scriptUrl: scriptUrl
    });

    return <FontCN type={type} />;
};

export default IconFont;
