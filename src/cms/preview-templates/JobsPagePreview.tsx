import React from "react";

import { PreviewProps } from "../../common/interfaces";
import { JobsPageTemplate } from "../../templates/content/JobsPageTemplate";

const JobsPagePreview: React.FC<PreviewProps> = ({ entry, widgetFor }) => (
    <JobsPageTemplate title={entry.getIn(["data", "title"])} content={widgetFor("body")} />
);

export default JobsPagePreview;
