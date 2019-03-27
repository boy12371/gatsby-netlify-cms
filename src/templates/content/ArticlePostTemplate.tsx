import React from "react";
import { Link } from "gatsby";
import { kebabCase } from "lodash";

import { ArticlePostTemplateProps } from "../../common/interfaces/ArticlePost";
import Content from "../../components/Content";
import Layout from "../../components/Layout";

export const ArticlePostTemplate: React.FC<ArticlePostTemplateProps> = ({ title, description, date, content, contentComponent, tags }) => {
    const PostContent = contentComponent || Content;
    const name = tags ? tags[0] : "文章";

    return (
        <Layout name={name} title={title} description={description} isCrumb={true} tags={tags}>
            <section className="section">
                <div className="container content">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
                            <p>{description}</p>
                            <PostContent content={content} />
                            {date}
                            {tags && tags.length ? (
                                <div style={{ marginTop: `4rem` }}>
                                    <h4>分类</h4>
                                    <ul className="taglist">
                                        {tags.map(tag => (
                                            <li key={tag + `tag`}>
                                                <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
