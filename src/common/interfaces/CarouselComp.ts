import { ImageProps } from "./index";

export interface CarouselProps {
    carouselItems?: ImageProps[];
}

export interface CarouselTemplateProps {
    interval?: number;
    carouselItems?: ImageProps[];
}

export interface CarouselSettingsProps {
    data: {
        markdownRemark: {
            frontmatter: {
                interval: number;
            };
        };
    };
}

export interface CarouselQueryData {
    allMarkdownRemark: {
        edges: [
            {
                node: {
                    frontmatter: {
                        interval: number;
                    };
                };
            }
        ];
    };
}
