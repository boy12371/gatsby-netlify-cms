import { BaseContentProps, Frontmatter, MarkdownRemark } from "./index";

export interface ArticlePostTemplateProps {
    title: string;
    description?: string;
    date?: React.ReactNode;
    content?: string;
    contentComponent?: React.ComponentType<BaseContentProps<any>>;
    tags?: string[];
}

export interface ArticlePostData<F extends object = Frontmatter> {
    markdownRemark: MarkdownRemark<F>;
}

export interface ArticlePostProps {
    data: ArticlePostData;
}
