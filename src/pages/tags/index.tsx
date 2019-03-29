import * as React from "react";
import { graphql } from "gatsby";

import { TagsPageProps } from "../../common/interfaces/TagsPage";
import TagsPageTemplate from "../../components/TagsPageTemplate";

const TagsPage: React.FC<TagsPageProps> = ({ data }) => {
    const { allMarkdownRemark: post } = data;

    return <TagsPageTemplate group={post.group} />;
};

export default TagsPage;

export const tagsPageQuery = graphql`
    query TagsQuery {
        allMarkdownRemark(limit: 1000) {
            group(field: frontmatter___tags) {
                fieldValue
                totalCount
            }
        }
    }
`;
