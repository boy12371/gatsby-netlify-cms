import * as React from "react";
import { graphql } from "gatsby";

import { HeaderProps } from "../common/interfaces/HeaderComp";
import HeaderTemplate from "../components/HeaderTemplate";

const HeaderSettings: React.FC<HeaderProps> = ({ data }) => {
    const {
        markdownRemark: { frontmatter: post }
    } = data;

    return <HeaderTemplate isLogo={post.isLogo} logoItem={post.logoItem} isNav={post.isNav} navItems={post.navItems} />;
};

export default HeaderSettings;

export const HeaderSettingsQuery = graphql`
    query HeaderSettings($id: String!) {
        markdownRemark(id: { eq: $id }) {
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
`;
