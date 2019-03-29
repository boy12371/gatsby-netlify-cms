import React from "react";
import { Link } from "gatsby";
import { CarouselTemplateProps } from "../common/interfaces/CarouselComp";

const CarouselTemplate: React.FC<CarouselTemplateProps> = ({ interval, carouselItems }) => {
    carouselItems = carouselItems || [];

    return (
        <div>
            {interval}
            <div>
                {carouselItems.map((item, index) => (
                    <Link key={index} className="navbar-item" to={`/${item.path}` || "/"}>
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CarouselTemplate;
