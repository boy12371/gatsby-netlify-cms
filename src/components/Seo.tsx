import * as React from "react";
import Helmet from "react-helmet";
import { graphql, StaticQuery } from "gatsby";
import { SeoProps, SeoQueryData } from "../common/interfaces";

const Seo: React.FC<SeoProps> = ({
    title,
    description,
    keywords,
    lang,
    meta
}) => {
    const checkedLang: string = lang ? lang : "zh";
    const checkedKeywords: string[] = keywords ? keywords : [];
    const checkedMeta: Array<{
        name: string;
        content: string;
    }> = meta ? meta : [];

    return (
        <StaticQuery
            query={query}
            render={(data: SeoQueryData) => {
                const metaDescription =
                    description || data.site.siteMetadata.description;
                return (
                    <Helmet
                        htmlAttributes={{
                            lang: checkedLang
                        }}
                        title={title}
                        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
                        meta={[
                            {
                                name: `description`,
                                content: metaDescription
                            },
                            {
                                property: `og:title`,
                                content: title
                            },
                            {
                                property: `og:description`,
                                content: metaDescription
                            },
                            {
                                property: `og:type`,
                                content: `website`
                            }
                        ]
                            .concat(
                                checkedKeywords.length > 0
                                    ? {
                                          name: `keywords`,
                                          content: checkedKeywords.join(`, `)
                                      }
                                    : []
                            )
                            .concat(checkedMeta)}
                    />
                );
            }}
        />
    );
};

export default Seo;

const query = graphql`
    query SeoQuery {
        site {
            siteMetadata {
                title
                description
                keywords
                author
            }
        }
    }
`;
