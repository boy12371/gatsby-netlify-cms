import * as React from "react";
import { graphql } from "gatsby";

import { JobsPageProps } from "../common/interfaces/JobsPage";
import { HTMLContent } from "../components/Content";
import { JobsPageTemplate } from "../components/JobsPageTemplate";

const JobsPage: React.FC<JobsPageProps> = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <JobsPageTemplate
            title={post.frontmatter.title}
            isHeader={post.frontmatter.isHeader}
            isCrumb={post.frontmatter.isCrumb}
            content={post.html}
            contentComponent={HTMLContent}
            isFooter={post.frontmatter.isFooter}
        />
    );
};

export default JobsPage;

export const jobsPageQuery = graphql`
    query JobsPage($id: String!) {
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
