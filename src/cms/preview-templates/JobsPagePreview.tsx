import React from "react";

import { JobsPageTemplate } from "../../templates/jobs-page";
import { PreviewProps } from "../../common/interfaces";

const JobsPagePreview: React.FC<PreviewProps> = ({ entry, widgetFor }) => (
    <JobsPageTemplate
        title={entry.getIn(["data", "title"])}
        content={widgetFor("body")}
    />
);

export default JobsPagePreview;
