import React from "react";
import { Link, graphql, StaticQuery } from "gatsby";
import { MenuQueryData } from "../common/interfaces";

const Menu: React.FC = ({}) => {
    return (
        <StaticQuery
            query={query}
            render={(data: MenuQueryData) => {
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
                    <>
                        {post.menuItems.map((item, index) => (
                            <Link
                                key={index}
                                className="navbar-item"
                                to={`${item.path}`}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </>
                );
            }}
        />
    );
};

export default Menu;

const query = graphql`
    query MenuQuery {
        allMarkdownRemark(
            filter: {
                frontmatter: { templateKey: { eq: "navigation-settings" } }
            }
        ) {
            edges {
                node {
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        templateKey
                        menuItems {
                            title
                            path
                        }
                    }
                }
            }
        }
    }
`;
