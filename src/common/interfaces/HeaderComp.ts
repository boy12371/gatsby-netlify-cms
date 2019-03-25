import { ImageProps } from "./index";
import { NavItemProps } from "./NavComp";

export interface HeaderTemplateProps {
    isLogo: boolean;
    logoItem: ImageProps;
    isNav: boolean;
    navItems: NavItemProps[];
}

export interface HeaderQueryData {
    allMarkdownRemark: {
        edges: [
            {
                node: {
                    frontmatter: HeaderTemplateProps;
                };
            }
        ];
    };
}

export interface HeaderProps {
    data: {
        markdownRemark: {
            frontmatter: HeaderTemplateProps;
        };
    };
}
