import * as React from "react";
import { graphql, StaticQuery } from "gatsby";

import { HeaderQueryData } from "../common/interfaces/HeaderComp";
import HeaderTemplate from "./HeaderTemplate";

export const Header: React.FC = ({}) => {
    return (
        <StaticQuery
            query={query}
            render={(data: HeaderQueryData) => {
                const {
                    allMarkdownRemark: {
                        edges: [
                            {
                                node: { frontmatter: post }
                            }
                        ]
                    }
                } = data;

                return <HeaderTemplate isLogo={post.isLogo} logoItem={post.logoItem} isNav={post.isNav} navItems={post.navItems} />;
            }}
        />
    );
};

export default Header;

const query = graphql`
    query HeaderQuery {
        allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "HeaderSettings" } } }) {
            edges {
                node {
                    frontmatter {
                        isLogo
                        logoItem {
                            title
                            image {
                                publicURL
                                childImageSharp {
                                    fluid {
                                        base64
                                    }
                                }
                            }
                            path
                        }
                        isNav
                        navItems {
                            title
                            path
                        }
                    }
                }
            }
        }
    }
`;
