import { BaseContentProps } from "./index";

export interface AboutPageTemplateProps {
    title: string;
    description?: string;
    isHeader?: boolean;
    content?: string;
    contentComponent?: React.ComponentType<BaseContentProps<any>>;
    isFooter?: boolean;
}

export interface AboutPageProps {
    data: { markdownRemark: { html: any; frontmatter: { title: string; description: string; isHeader: boolean; isFooter: boolean } } };
}
