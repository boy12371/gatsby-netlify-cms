import * as React from "react";
import { graphql } from "gatsby";

import { CarouselSettingsProps } from "../common/interfaces/CarouselComp";
import CarouselTemplate from "../components/CarouselTemplate";

const CarouselSettings: React.FC<CarouselSettingsProps> = ({ data }) => {
    const {
        markdownRemark: { frontmatter: post }
    } = data;

    return <CarouselTemplate interval={post.interval} />;
};

export default CarouselSettings;

export const carouselSettingsQuery = graphql`
    query CarouselSettings($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                interval
            }
        }
    }
`;
