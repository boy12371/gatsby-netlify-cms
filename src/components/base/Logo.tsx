import React, { FC, CSSProperties } from "react";

interface LogoProps {
    dataSource?: { title?: string; imgUrl?: string; style?: CSSProperties; link?: string };
}

const Logo: FC<LogoProps> = ({ dataSource }) => {
    dataSource = dataSource || { title: "匡架网络", imgUrl: "/img/logo.svg", style: { fontSize: "32px" }, link: "/" };
    const { title, imgUrl, style } = dataSource;

    return <img alt={title} src={imgUrl} style={style} />;
};

export default Logo;
