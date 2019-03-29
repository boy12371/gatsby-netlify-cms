import * as React from "react";
import { graphql } from "gatsby";

import { ArticlePostProps } from "../common/interfaces/ArticlePost";
import { HTMLContent } from "../components/Content";
import { ArticlePostTemplate } from "../components/ArticlePostTemplate";

const ArticlePost: React.FC<ArticlePostProps> = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <ArticlePostTemplate
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            date={post.frontmatter.date}
            content={post.html}
            contentComponent={HTMLContent}
            tags={post.frontmatter.tags}
        />
    );
};

export default ArticlePost;

export const pageQuery = graphql`
    query ArticlePostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                title
                description
                date(formatString: "MMMM DD, YYYY")
                tags
            }
        }
    }
`;
