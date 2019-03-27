import React from "react";
import { graphql } from "gatsby";

import { HTMLContent } from "../components/Content";
import { AboutPageProps } from "../common/interfaces/AboutPage";
import AboutPageTemplate from "./content/AboutPageTemplate";

const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <AboutPageTemplate
            title={post.frontmatter.title}
            isCrumb={post.frontmatter.isCrumb}
            content={post.html}
            contentComponent={HTMLContent}
        />
    );
};

export default AboutPage;

export const aboutPageQuery = graphql`
    query AboutPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                description
                isHeader
                isCrumb
                isFooter
            }
        }
    }
`;
