import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import { ImageProps } from "../common/interfaces";

const Logo: React.FC<ImageProps> = ({ title, image, path }) => {
    image = image || { publicURL: "/assets/img/logo.svg" };
    const logo = image.childImageSharp ? (
        <Img style={{ width: "88px" }} fluid={image.childImageSharp.fluid} alt={title} />
    ) : (
        <img src={image.publicURL} alt={title} style={{ width: "88px" }} />
    );
    path = path || "/";

    return (
        <Link to={path} className="navbar-item">
            <figure className="image">{logo}</figure>
        </Link>
    );
};

export default Logo;
