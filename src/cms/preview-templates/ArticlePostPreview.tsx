import React from "react";

import { PreviewProps } from "../../common/interfaces";
import { ArticlePostTemplate } from "../../templates/content/ArticlePostTemplate";

const ArticlePostPreview: React.FC<PreviewProps> = ({ entry, widgetFor }) => (
    <ArticlePostTemplate
        content={widgetFor("body")}
        description={entry.getIn(["data", "description"])}
        tags={entry.getIn(["data", "tags"])}
        title={entry.getIn(["data", "title"])}
    />
);

export default ArticlePostPreview;
