import React from "react";
import { graphql } from "gatsby";

import { TagsPageProps } from "../../common/interfaces/TagsPage";
import TagsPageTemplate from "../../templates/content/TagsPageTemplate";

const TagsPage: React.FC<TagsPageProps> = ({ data }) => {
    const { allMarkdownRemark: post } = data;

    return <TagsPageTemplate group={post.group} />;
};

export default TagsPage;

export const tagPageQuery = graphql`
    query TagsQuery {
        allMarkdownRemark(limit: 1000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`;
