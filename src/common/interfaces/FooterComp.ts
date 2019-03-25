import { BaseContentProps } from "./index";

export interface FooterTemplateProps {
    content: string;
    contentComponent?: React.ComponentType<BaseContentProps<any>>;
}

export interface FooterQueryData {
    allMarkdownRemark: { edges: [{ node: { html: any } }] };
}

export interface FooterProps {
    data: {
        markdownRemark: {
            html: any;
        };
    };
}
