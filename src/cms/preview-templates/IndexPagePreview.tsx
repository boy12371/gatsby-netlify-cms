import React from "react";

import { PreviewProps } from "../../common/interfaces";
import { IndexPageTemplate } from "../../components/IndexPageTemplate";

const IndexPagePreview: React.FC<PreviewProps> = ({ entry }) => <IndexPageTemplate title={entry.getIn(["data", "title"])} />;

export default IndexPagePreview;
