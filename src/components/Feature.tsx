import React from "react";

import PreviewImage from "./PreviewImage";
import { FeatureProps } from "../common/interfaces";

export const Feature: React.FC<FeatureProps> = ({ featureItems }) => (
    <div className="columns is-multiline">
        {featureItems.map(item => (
            <div key={item.title} className="column is-6">
                <section className="section">
                    <div className="has-text-centered">
                        <div
                            style={{
                                width: "240px",
                                display: "inline-block"
                            }}
                        >
                            <PreviewImage imageInfo={item} />
                        </div>
                    </div>
                    <p>{item.title}</p>
                </section>
            </div>
        ))}
    </div>
);

export default Feature;
