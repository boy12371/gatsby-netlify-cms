import * as React from "react";

import { IndexPageTemplateProps } from "../common/interfaces/IndexPage";
import Carousel from "./Carousel";
import Layout from "./Layout";
import Feature from "./Features";

export const IndexPageTemplate: React.FC<IndexPageTemplateProps> = ({
    title,
    description,
    isHeader,
    isCarousel,
    carouselItems,
    isFeature,
    featureItems,
    isFooter
}) => {
    const carousel = isCarousel ? <Carousel carouselItems={carouselItems} /> : <></>;
    const feature = isFeature ? <Feature featureItems={featureItems} /> : <></>;

    return (
        <Layout title={title} description={description} isHeader={isHeader} isFooter={isFooter}>
            {carousel}
            {feature}
        </Layout>
    );
};

export default IndexPageTemplate;
