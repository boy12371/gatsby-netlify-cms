import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import { Content, HTMLContent } from "../components/Content";
import { JobsPageTemplateProps, JobsPageProps } from "../common/interfaces";
import Seo from "../components/Seo";

export const JobsPageTemplate: React.FC<JobsPageTemplateProps> = ({
    title,
    content,
    contentComponent
}) => {
    const PageContent = contentComponent || Content;

    return (
        <section className="section section--gradient">
            <Seo title={title} />
            <div className="container">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="section">
                            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                {title}
                            </h2>
                            <PageContent
                                className="content"
                                content={content}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const JobsPage: React.FC<JobsPageProps> = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <JobsPageTemplate
                title={post.frontmatter.title}
                content={post.html}
                contentComponent={HTMLContent}
            />
        </Layout>
    );
};

export default JobsPage;

export const jobsPageQuery = graphql`
    query JobsPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
