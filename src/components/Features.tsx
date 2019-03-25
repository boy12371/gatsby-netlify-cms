import React from "react";
import Img from "gatsby-image";

import { FeatureProps } from "../common/interfaces/FeatureComp";

export const Feature: React.FC<FeatureProps> = ({ featureItems }) => {
    featureItems = featureItems || [];
    return (
        <div className="columns is-multiline">
            {featureItems.map(item => {
                const {
                    title,
                    image: { publicURL, childImageSharp },
                    style
                } = item;
                const imageStyle = style || { borderRadius: "5px" };
                const imageInfo = childImageSharp ? (
                    <Img style={imageStyle} fluid={childImageSharp.fluid} alt={title} />
                ) : (
                    <img style={imageStyle} src={publicURL} alt={title} />
                );

                return (
                    <div key={item.title} className="column is-6">
                        <section className="section">
                            <div className="has-text-centered">
                                <div
                                    style={{
                                        width: "240px",
                                        display: "inline-block"
                                    }}
                                >
                                    {imageInfo}
                                </div>
                            </div>
                            <p>{item.title}</p>
                        </section>
                    </div>
                );
            })}
        </div>
    );
};

export default Feature;
