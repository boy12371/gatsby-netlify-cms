import * as React from "react";
import { graphql, StaticQuery, Link } from "gatsby";

import { CarouselQueryData, CarouselProps } from "../common/interfaces/CarouselComp";

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

                return (
                    <div>
                        {post.interval}
                        <div>
                            {carouselItems.map((item, index) => (
                                <Link key={index} className="navbar-item" to={`${item.path}`}>
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                );
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
