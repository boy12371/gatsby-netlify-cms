import React from "react";

import { AboutPageTemplateProps } from "../../common/interfaces/AboutPage";
import Content from "../../components/Content";
import Layout from "../../components/Layout";

export const AboutPageTemplate: React.FC<AboutPageTemplateProps> = ({
    title,
    description,
    isHeader,
    content,
    contentComponent,
    isFooter
}) => {
    const PageContent = contentComponent || Content;

    return (
        <Layout title={title} description={description} isHeader={isHeader} isFooter={isFooter}>
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

export default AboutPageTemplate;
