import React from "react";
import { graphql } from "gatsby";

import { FooterProps } from "../common/interfaces/FooterComp";
import { HTMLContent } from "../components/Content";
import FooterTemplate from "./content/FooterTemplate";

const FooterSettings: React.FC<FooterProps> = ({ data }) => {
    const { markdownRemark: post } = data;

    return <FooterTemplate contentComponent={HTMLContent} content={post.html} />;
};

export default FooterSettings;

export const query = graphql`
    query FooterSettings($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
        }
    }
`;
