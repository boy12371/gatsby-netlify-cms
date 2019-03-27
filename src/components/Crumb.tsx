import React from "react";
import { CrumbProps } from "../common/interfaces/CrumbComp";

const Crumb: React.FC<CrumbProps> = ({ tags, title }) => {
    let TagElement: JSX.Element;
    if (tags && title) {
        TagElement = (
            <div>
                首页 > {tags[0]} > {title}
            </div>
        );
    } else if (tags == true && title) {
        TagElement = <div>首页 > {title}</div>;
    } else {
        TagElement = <></>;
    }

    return <>{TagElement}</>;
};

export default Crumb;
