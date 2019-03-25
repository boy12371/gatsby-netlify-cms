import React from "react";
import { graphql } from "gatsby";

import Logo from "../components/Logo";

const FooterSettings: React.FC = () => {
    return <Logo />;
};

export default FooterSettings;

export const query = graphql`
    query FooterQuery($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                logo {
                    childImageSharp {
                        fluid(maxWidth: 240) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                path
                alt
            }
        }
    }
`;
