import { ImageProps } from "./index";

export interface IndexPageTemplateProps {
    title: string;
    description?: string;
    isHeader?: boolean;
    isCarousel?: boolean;
    carouselItems?: ImageProps[];
    isFeature?: boolean;
    featureItems?: ImageProps[];
    isFooter?: boolean;
}

export interface IndexPageProps {
    data: { markdownRemark: { frontmatter: IndexPageTemplateProps } };
}
