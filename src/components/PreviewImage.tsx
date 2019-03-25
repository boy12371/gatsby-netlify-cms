import React from "react";
import Img from "gatsby-image";
import { PreviewImageProps } from "../common/interfaces";

const PreviewImage: React.FC<PreviewImageProps> = ({ imageInfo }) => {
    const {
        title,
        image: { publicURL, childImageSharp },
        style
    } = imageInfo;
    const imageStyle = style || { borderRadius: "5px" };

    if (childImageSharp) {
        return (
            <Img style={imageStyle} fluid={childImageSharp.fluid} alt={title} />
        );
    } else {
        return <img style={imageStyle} src={publicURL} alt={title} />;
    }
};

export default PreviewImage;
