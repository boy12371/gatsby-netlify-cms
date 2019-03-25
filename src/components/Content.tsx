import React from "react";
import { HTMLContentProps, ContentProps } from "../common/interfaces";

export const HTMLContent: React.FC<HTMLContentProps> = ({ content, className }) => {
    content = content || "";
    return <div className={className} dangerouslySetInnerHTML={{ __html: content }} />;
};

export const Content: React.FC<ContentProps> = ({ content, className }) => <div className={className}>{content}</div>;

export default Content;
