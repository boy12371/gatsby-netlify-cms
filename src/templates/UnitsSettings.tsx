import React from "react";
import { graphql } from "gatsby";

import { UnitsSettingsProps } from "../common/interfaces/UnitsComp";
import UnitsTemplate from "./content/UnitsTemplate";

const UnitsSettings: React.FC<UnitsSettingsProps> = ({ data }) => {
    const {
        markdownRemark: { frontmatter: post }
    } = data;

    return <UnitsTemplate currency={post.currency} weight={post.weight} />;
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
