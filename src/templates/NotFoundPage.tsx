import React from "react";
import { graphql } from "gatsby";

import { NotFoundPageProps } from "../common/interfaces/NotFoundPage";
import { HTMLContent } from "../components/Content";
import { NotFoundPageTemplate } from "../components/NotFoundPageTemplate";

const NotFoundPage: React.FC<NotFoundPageProps> = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <NotFoundPageTemplate
            title={post.frontmatter.title}
            isHeader={post.frontmatter.isHeader}
            contentComponent={HTMLContent}
            content={post.html}
            isFooter={post.frontmatter.isFooter}
        />
    );
};

export default NotFoundPage;

export const NotFoundPagePageQuery = graphql`
    query NotFoundPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                isHeader
                isFooter
            }
        }
    }
`;
