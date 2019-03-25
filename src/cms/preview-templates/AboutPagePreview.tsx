import React from "react";

import { AboutPageTemplate } from "../../templates/about-page";
import { PreviewProps } from "../../common/interfaces";

const AboutPagePreview: React.FC<PreviewProps> = ({ entry, widgetFor }) => (
    <AboutPageTemplate
        title={entry.getIn(["data", "title"])}
        content={widgetFor("body")}
    />
);

export default AboutPagePreview;
