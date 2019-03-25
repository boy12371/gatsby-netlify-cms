import React from "react";
import { graphql } from "gatsby";

import { HTMLContent } from "../components/Content";
import { JobsPageTemplate } from "./content/JobsPageTemplate";
import { JobsPageProps } from "../common/interfaces/JobsPage";

const JobsPage: React.FC<JobsPageProps> = ({ data }) => {
    const { markdownRemark: post } = data;

    return <JobsPageTemplate title={post.frontmatter.title} content={post.html} contentComponent={HTMLContent} />;
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
                isFooter
            }
        }
    }
`;
