import React from "react";
import { Link } from "gatsby";
import { kebabCase } from "lodash";

import { TagsPageTemplateProps } from "../common/interfaces/TagsPage";
import Layout from "../components/Layout";

export const TagsPageTemplate: React.FC<TagsPageTemplateProps> = ({ group }) => {
    group = group || [{ fieldValue: "", totalCount: 0 }];
    return (
        <Layout title="分类">
            <section className="section">
                <div className="container content">
                    <div className="columns">
                        <div className="column is-10 is-offset-1" style={{ marginBottom: "6rem" }}>
                            <h1 className="title is-size-2 is-bold-light">分类</h1>
                            <ul className="taglist">
                                {group.map(tag => (
                                    <li key={tag.fieldValue}>
                                        <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                                            {tag.fieldValue} ({tag.totalCount})
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default TagsPageTemplate;
