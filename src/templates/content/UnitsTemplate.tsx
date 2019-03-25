import React from "react";
import { UnitsTemplateProps } from "../../common/interfaces/UnitsComp";

const UnitsTemplate: React.FC<UnitsTemplateProps> = ({ currency, weight }) => {
    return (
        <div>
            {currency}
            {weight}
        </div>
    );
};

export default UnitsTemplate;
