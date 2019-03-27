import { BaseContentProps } from "./index";

export interface NotFoundPageTemplateProps {
    title: string;
    isHeader?: boolean;
    content?: string;
    contentComponent?: React.ComponentType<BaseContentProps<any>>;
    isFooter?: boolean;
}

export interface NotFoundPageProps {
    data: { markdownRemark: { html: any; frontmatter: { title: string; isHeader: boolean; isFooter: boolean } } };
}
