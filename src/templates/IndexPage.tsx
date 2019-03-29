import * as React from "react";
import { graphql } from "gatsby";

import { IndexPageProps } from "../common/interfaces/IndexPage";
import { IndexPageTemplate } from "../components/IndexPageTemplate";

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
    const {
        markdownRemark: { frontmatter: post }
    } = data;

    return (
        <IndexPageTemplate
            title={post.title}
            description={post.description}
            isHeader={post.isHeader}
            isCarousel={post.isCarousel}
            carouselItems={post.carouselItems}
            isFeature={post.isFeature}
            featureItems={post.featureItems}
            isFooter={post.isFooter}
        />
    );
};

export default IndexPage;

export const indexPageQuery = graphql`
    query IndexPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                description
                isHeader
                isCarousel
                carouselItems {
                    title
                    image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 2048, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    path
                }
                isFeature
                featureItems {
                    title
                    image {
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 2048, quality: 100) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    path
                }
                isFooter
            }
        }
    }
`;
