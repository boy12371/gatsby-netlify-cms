import React from "react";
import { graphql, StaticQuery } from "gatsby";

import { FooterQueryData } from "../common/interfaces/FooterComp";
import FooterTemplate from "../templates/content/FooterTemplate";
import { HTMLContent } from "./Content";

export const Footer: React.FC = ({}) => {
    return (
        <StaticQuery
            query={query}
            render={(data: FooterQueryData) => {
                const {
                    allMarkdownRemark: {
                        edges: [{ node: post }]
                    }
                } = data;

                return <FooterTemplate contentComponent={HTMLContent} content={post.html} />;
            }}
        />
    );
};

export default Footer;

const query = graphql`
    query FooterQuery {
        allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "FooterSettings" } } }) {
            edges {
                node {
                    html
                }
            }
        }
    }
`;
