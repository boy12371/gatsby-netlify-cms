import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import { LogoQueryData } from "../common/interfaces";

const Logo: React.FC = ({}) => {
    return (
        <StaticQuery
            query={query}
            render={(data: LogoQueryData) => {
                const {
                    allMarkdownRemark: {
                        edges: [
                            {
                                node: { frontmatter: post }
                            }
                        ]
                    }
                } = data;
                const image = post.logo.childImageSharp ? (
                    <Img
                        style={{ width: "88px" }}
                        fluid={post.logo.childImageSharp.fluid}
                        alt={post.alt}
                    />
                ) : (
                    <img
                        src={post.logo.publicURL}
                        alt={post.alt}
                        style={{ width: "88px" }}
                    />
                );
                return (
                    <Link to={post.path} className="navbar-item">
                        <figure className="image">{image}</figure>
                    </Link>
                );
            }}
        />
    );
};

export default Logo;

const query = graphql`
    query LogoQuery {
        allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "logo-settings" } } }
        ) {
            edges {
                node {
                    frontmatter {
                        templateKey
                        logo {
                            publicURL
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        path
                        alt
                    }
                }
            }
        }
    }
`;
