import React from "react";
import { graphql } from "gatsby";

import { AboutPageProps } from "../common/interfaces/AboutPage";
import { HTMLContent } from "../components/Content";
import AboutPageTemplate from "../components/AboutPageTemplate";

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
