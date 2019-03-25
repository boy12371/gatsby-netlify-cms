import React from "react";

import { IndexPageTemplate } from "../../templates/index-page";
import { PreviewProps } from "../../common/interfaces";

const IndexPagePreview: React.FC<PreviewProps> = ({ entry, widgetFor }) => (
    <IndexPageTemplate
        title={entry.getIn(["data", "title"])}
        content={widgetFor("body")}
    />
);

export default IndexPagePreview;
