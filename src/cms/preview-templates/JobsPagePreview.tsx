import * as React from "react";

import { PreviewProps } from "../../common/interfaces";
import { JobsPageTemplate } from "../../components/JobsPageTemplate";

const JobsPagePreview: React.FC<PreviewProps> = ({ entry, widgetFor }) => (
    <JobsPageTemplate title={entry.getIn(["data", "title"])} content={widgetFor("body")} />
);

export default JobsPagePreview;
