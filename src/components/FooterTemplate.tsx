import React from "react";

import { FooterTemplateProps } from "../common/interfaces/FooterComp";
import Content from "../components/Content";

const FooterTemplate: React.FC<FooterTemplateProps> = ({ content, contentComponent }) => {
    const PageContent = contentComponent || Content;

    return <PageContent className="content" content={content} />;
};

export default FooterTemplate;
