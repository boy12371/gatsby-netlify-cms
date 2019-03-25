import React from "react";
import { graphql } from "gatsby";

import Logo from "../components/Logo";

const UnitsSettings: React.FC = () => {
    return <Logo />;
};

export default UnitsSettings;

export const unitsSettingsQuery = graphql`
    query UnitsSettings($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                currency
                weight
            }
        }
    }
`;
