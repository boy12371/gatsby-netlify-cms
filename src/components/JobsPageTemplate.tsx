import * as React from "react";

import { JobsPageTemplateProps } from "../common/interfaces/JobsPage";
import Content from "./Content";
import Layout from "./Layout";

export const JobsPageTemplate: React.FC<JobsPageTemplateProps> = ({
    title,
    description,
    isHeader,
    isCrumb,
    content,
    contentComponent,
    isFooter
}) => {
    const PageContent = contentComponent || Content;

    return (
        <Layout title={title} description={description} isHeader={isHeader} isCrumb={isCrumb} isFooter={isFooter}>
            <section className="section section--gradient">
                <div className="container">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="section">
                                <h2 className="title is-size-3 has-text-weight-bold is-bold-light">{title}</h2>
                                <PageContent className="content" content={content} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
