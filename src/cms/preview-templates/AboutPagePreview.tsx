import React from "react";

import { PreviewProps } from "../../common/interfaces";
import AboutPageTemplate from "../../components/AboutPageTemplate";

const AboutPagePreview: React.FC<PreviewProps> = ({ entry, widgetFor }) => (
    <AboutPageTemplate title={entry.getIn(["data", "title"])} content={widgetFor("body")} />
);

export default AboutPagePreview;
