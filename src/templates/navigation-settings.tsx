import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

const NavigationSettings: React.FC = () => {
    return <Layout />;
};

export default NavigationSettings;

export const navigationSettingsQuery = graphql`
    query NavigationSettings($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                isLogo
                menuItems {
                    title
                    path
                }
            }
        }
    }
`;
