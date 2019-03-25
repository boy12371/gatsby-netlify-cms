import * as React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Carousel as Card } from "react-responsive-carousel";

import { CarouselQueryData, CarouselProps } from "../common/interfaces";
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel: React.FC<CarouselProps> = ({ carouselItems }) => {
    return (
        <StaticQuery
            query={query}
            render={(data: CarouselQueryData) => {
                const {
                    allMarkdownRemark: {
                        edges: [
                            {
                                node: { frontmatter: post }
                            }
                        ]
                    }
                } = data;

                return (
                    <Card
                        showArrows={post.isShowArrows}
                        showStatus={post.isShowStatus}
                        showIndicators={post.isShowIndicators}
                        showThumbs={post.isShowThumbs}
                        infiniteLoop={post.isInfiniteLoop}
                        selectedItem={post.selectedItem}
                        autoPlay={post.isAutoPlay}
                        interval={post.interval}
                        dynamicHeight={post.isDynamicHeight}
                        centerMode={post.isCenterMode}
                        centerSlidePercentage={post.centerSlidePercentage}
                    >
                        {carouselItems.map((item, index) => (
                            <div key={index}>
                                <a href={`${item.path}`}>
                                    <Img
                                        style={{
                                            width: "100%",
                                            height: "25rem"
                                        }}
                                        fluid={item.image.childImageSharp.fluid}
                                        alt={item.title}
                                    />
                                </a>
                                {post.isShowTitle && (
                                    <p className="legend">
                                        <a href={`${item.path}`}>
                                            {item.title}
                                        </a>
                                    </p>
                                )}
                            </div>
                        ))}
                    </Card>
                );
            }}
        />
    );
};

export default Carousel;

const query = graphql`
    query CarouselQuery {
        allMarkdownRemark(
            filter: {
                frontmatter: { templateKey: { eq: "carousel-settings" } }
            }
        ) {
            edges {
                node {
                    frontmatter {
                        templateKey
                        isShowArrows
                        isShowStatus
                        isShowIndicators
                        isShowThumbs
                        isInfiniteLoop
                        selectedItem
                        isAutoPlay
                        interval
                        isDynamicHeight
                        isCenterMode
                        centerSlidePercentage
                        isShowTitle
                        carouselItems {
                            title
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 1000, quality: 64) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                            path
                        }
                    }
                }
            }
        }
    }
`;
