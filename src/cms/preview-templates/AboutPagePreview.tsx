import React from "react";

import { PreviewProps } from "../../common/interfaces";
import AboutPageTemplate from "../../templates/content/AboutPageTemplate";

const AboutPagePreview: React.FC<PreviewProps> = ({ entry, widgetFor }) => (
    <AboutPageTemplate title={entry.getIn(["data", "title"])} content={widgetFor("body")} />
);

export default AboutPagePreview;
