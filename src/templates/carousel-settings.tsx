import React from "react";
import { graphql } from "gatsby";

import Logo from "../components/Logo";

const CarouselSettings: React.FC = () => {
    return <Logo />;
};

export default CarouselSettings;

export const carouselSettingsQuery = graphql`
    query CarouselSettings($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                isShowArrows
                isShowStatus
                isShowIndicators
                isShowThumbs
                isInfiniteLoop
                selectedItem
                isDynamicHeight
                isCenterMode
                centerSlidePercentage
                carouselItems {
                    title
                    image {
                        childImageSharp {
                            fluid(maxWidth: 900) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    path
                }
            }
        }
    }
`;
