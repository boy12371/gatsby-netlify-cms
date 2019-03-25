import React from "react";
import { Iterable } from "immutable";
import { ChildImageSharpVariants, Image } from "./types";

// ====================== Base ======================

export interface BaseContentProps<C> {
    content: C;
    className?: string;
}

// ====================== Html ======================

export interface HTMLContentProps extends BaseContentProps<string> {}

export interface ContentProps extends BaseContentProps<React.ReactText> {}

// ====================== Image ======================

export interface ChildImageSharp {
    fluid: {
        base64: string;
        tracedSVG: string;
        aspectRatio: number;
        src: string;
        srcSet: string;
        sizes: string;
        originalImg: string;
        originalName: string;
        presentationWidth: number;
        presentationHeight: number;
    };
}

export interface ImageProps {
    title: string;
    image: {
        publicURL: string;
        childImageSharp: ChildImageSharp;
    };
    style?: React.CSSProperties;
    path?: string;
}

export interface PreviewProps {
    entry: Iterable<any, any>;
    widgetFor: (name: string) => string;
    getAsset: <R>(name: string) => R;
}

export interface Price {
    plan?: string;
    price?: string | number;
    description?: string;
    items: React.ReactText[];
}

export interface PricingProps {
    data: Price[];
}

export interface Testimonial {
    quote?: string;
    author?: string;
}

export interface TestimonialsProps {
    testimonials: Testimonial[];
}

export interface Frontmatter {
    description: string;
    title: string;
    tags?: string[];
    date?: string;
}

export interface MarkdownRemark<F extends object = Frontmatter> {
    html: string;
    frontmatter: F;
}

export interface Edge<F extends Frontmatter = Frontmatter> {
    node: {
        fields: {
            slug: string;
        };
        frontmatter: F;
    };
}

export interface TagRouteProps<F extends Frontmatter = Frontmatter> {
    data: {
        allMarkdownRemark: {
            edges: Edge<F>[];
            totalCount: number;
        };
        site: {
            siteMetadata: {
                title: string;
            };
        };
    };
    pageContext: {
        tag: string;
    };
}

// ====================== AboutPage ======================

export interface AboutPageTemplateProps {
    content: string;
    title?: React.ReactText;
    contentComponent?: React.ComponentType<BaseContentProps<any>>;
}

export interface AboutPageProps {
    data: { markdownRemark: { html: any; frontmatter: { title: string } } };
}

// ====================== JobsPage ======================

export interface JobsPageTemplateProps {
    title: string;
    content: string;
    contentComponent?: React.ComponentType<BaseContentProps<any>>;
}

export interface JobsPageProps {
    data: { markdownRemark: { html: any; frontmatter: { title: string } } };
}

// ====================== SearchPage ======================

export interface SearchPostTemplateProps {
    content: React.ReactNode;
    contentComponent?: React.ComponentType<BaseContentProps<any>>;
    description: React.ReactText;
    tags?: string[];
    title: string;
    helmet?: React.ReactNode;
}

export interface SearchPostData<F extends object = Frontmatter> {
    markdownRemark: MarkdownRemark<F>;
}

export interface SearchPostProps {
    data: SearchPostData;
}

export interface SearchPageIntro {
    blurbs: ImageProps[];
}

export interface SearchPageMain {
    heading?: string;
    description?: string;
    image1: Image;
    image2: Image;
    image3: Image;
}

export interface SearchPagePricing {
    heading?: string;
    description?: string;
    plans: Price[];
}

export interface SearchPageTemplateProps {
    image: Image;
    title?: string;
    heading?: string;
    description?: string;
    intro: SearchPageIntro;
    main: SearchPageMain;
    testimonials: Testimonial[];
    fullImage: Image;
    pricing: SearchPagePricing;
}

export interface SearchPageFrontmatter extends Frontmatter {
    image: Image;
    heading: string;
    intro: SearchPageIntro;
    main: SearchPageMain;
    testimonials: Testimonial[];
    full_image: Image;
    pricing: SearchPagePricing;
}

export interface SearchPageProps {
    data: SearchPostData<SearchPageFrontmatter>;
}

// ====================== IndexPage ======================

export interface IndexPageTemplateProps {
    title: string;
    isNavigation?: boolean;
    isCarousel?: boolean;
    isArticle?: boolean;
    isFooter?: boolean;
}

export interface IndexPageProps {
    data: { markdownRemark: { frontmatter: IndexPageTemplateProps } };
}

// ====================== ProductPost ======================

export interface ArticlePostTemplateProps {
    content: React.ReactNode;
    contentComponent?: React.ComponentType<BaseContentProps<any>>;
    description: React.ReactText;
    tags?: string[];
    title: string;
    helmet?: React.ReactNode;
}

export interface ArticlePostData<F extends object = Frontmatter> {
    markdownRemark: MarkdownRemark<F>;
}

export interface ArticlePostProps {
    data: ArticlePostData;
}

// ====================== ProductPage ======================

export interface ProductPageIntro {
    blurbs: ImageProps[];
}

export interface ProductPageMain {
    heading?: string;
    description?: string;
    image1: Image;
    image2: Image;
    image3: Image;
}

export interface ProductPagePricing {
    heading?: string;
    description?: string;
    plans: Price[];
}

export interface ProductPageTemplateProps {
    image: Image;
    title?: string;
    heading?: string;
    description?: string;
    intro: ProductPageIntro;
    main: ProductPageMain;
    testimonials: Testimonial[];
    fullImage: Image;
    pricing: ProductPagePricing;
}

export interface ProductPageFrontmatter extends Frontmatter {
    image: Image;
    heading: string;
    intro: ProductPageIntro;
    main: ProductPageMain;
    testimonials: Testimonial[];
    full_image: Image;
    pricing: ProductPagePricing;
}

export interface ProductPageProps {
    data: ArticlePostData<ProductPageFrontmatter>;
}

// ====================== Components ======================

export interface SiteMetadata {
    readonly title: string;
    readonly description: string;
    readonly keywords: string[];
    readonly author: string;
}

// ====================== Seo ======================

export interface SeoQueryData {
    site: {
        siteMetadata: SiteMetadata;
    };
}

export interface SeoProps {
    title: string;
    description?: string;
    keywords?: string[];
    lang?: string;
    meta?: Array<{
        name: string;
        content: string;
    }>;
}

// ====================== Layout ======================

export interface LayoutProps {
    children?: React.ReactNode;
}

// ====================== Carousel ======================

export interface CarouselQueryData {
    allMarkdownRemark: {
        edges: [
            {
                node: {
                    frontmatter: {
                        isShowArrows: boolean;
                        isShowStatus: boolean;
                        isShowIndicators: boolean;
                        isShowThumbs: boolean;
                        isInfiniteLoop: boolean;
                        selectedItem: number;
                        isAutoPlay: boolean;
                        interval: number;
                        isDynamicHeight: boolean;
                        isCenterMode: boolean;
                        centerSlidePercentage: number;
                        isShowTitle: boolean;
                    };
                };
            }
        ];
    };
}

export interface CarouselProps {
    carouselItems: ImageProps[];
}

// ====================== Menu ======================

export interface MenuQueryData {
    allMarkdownRemark: {
        edges: [
            {
                node: {
                    frontmatter: { menuItems: MenuProps[] };
                };
            }
        ];
    };
}

export interface MenuProps {
    title: string;
    path: string;
}

// ====================== Logo ======================

export interface LogoQueryData {
    allMarkdownRemark: {
        edges: [
            {
                node: {
                    frontmatter: ImageProps;
                };
            }
        ];
    };
}

// ====================== Feature ======================

export interface FeatureProps {
    featureItems: ImageProps[];
}

// ====================== Preview ======================

export interface PreviewImageProps {
    imageInfo: ImageProps;
}
