import * as React from "react";
import { graphql, StaticQuery } from "gatsby";

import { CarouselQueryData, CarouselProps } from "../common/interfaces/CarouselComp";
import CarouselTemplate from "./CarouselTemplate";

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
                carouselItems = carouselItems || [];

                return <CarouselTemplate interval={post.interval} carouselItems={carouselItems} />;
            }}
        />
    );
};

export default Carousel;

const query = graphql`
    query CarouselQuery {
        allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "CarouselSettings" } } }) {
            edges {
                node {
                    frontmatter {
                        interval
                    }
                }
            }
        }
    }
`;
