import { Iterable } from "immutable";

export interface SiteMetadata {
    readonly title: string;
    readonly description: string;
    readonly keywords: string[];
    readonly author: string;
}

export type GatsbyPlugin =
    | string
    | {
          resolve: string;
          options: any;
      };

// ====================== Base ======================

export interface BaseContentProps<C> {
    className?: string;
    content?: C;
}

export interface Frontmatter {
    title: string;
    description?: string;
    tags?: string[];
    date?: string;
}

export interface MarkdownRemark<F extends object = Frontmatter> {
    html: string;
    frontmatter: F;
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
        childImageSharp?: ChildImageSharp;
    };
    path?: string;
    style?: React.CSSProperties;
}

export interface PreviewProps {
    entry: Iterable<any, any>;
    widgetFor: (name: string) => string;
    getAsset: <R>(name: string) => R;
}

// ====================== Tags ======================

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
