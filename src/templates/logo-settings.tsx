import React from "react";
import { graphql } from "gatsby";

import Logo from "../components/Logo";

const LogoSettings: React.FC = () => {
    return <Logo />;
};

export default LogoSettings;

export const logoSettingsQuery = graphql`
    query LogoSettings($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                logo {
                    absolutePath
                    extension
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
`;
