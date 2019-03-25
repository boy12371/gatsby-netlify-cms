import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import { IndexPageProps, IndexPageTemplateProps } from "../common/interfaces";
import Seo from "../components/Seo";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import { Article } from "../components/Article";
import { Footer } from "../components/Footer";

export const IndexPageTemplate: React.FC<IndexPageTemplateProps> = ({
    title,
    isNavigation,
    isCarousel,
    isArticle,
    isFooter
}) => {
    const navigation = isNavigation ? <Navbar /> : "";
    const carousel = isCarousel ? <Carousel /> : "";
    const article = isArticle ? <Article /> : "";
    const footer = isFooter ? <Footer /> : "";

    return (
        <Layout>
            <Seo title={title} />
            {navigation}
            {carousel}
            {article}
            {footer}
        </Layout>
    );
};

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
    const {
        markdownRemark: { frontmatter: post }
    } = data;

    return (
        <Layout>
            <IndexPageTemplate
                title={post.title}
                isNavigation={post.isNavigation}
                isCarousel={post.isCarousel}
                isArticle={post.isArticle}
                isFooter={post.isFooter}
            />
        </Layout>
    );
};

export default IndexPage;

export const indexPageQuery = graphql`
    query IndexPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                title
                isNavigation
                isCarousel
                isArticle
                isFooter
            }
        }
    }
`;
