import * as React from "react";
import { CrumbProps } from "../common/interfaces/CrumbComp";

const Crumb: React.FC<CrumbProps> = ({ title, tags }) => {
    let TagElement: JSX.Element;
    if (tags && title) {
        TagElement = (
            <div>
                首页 > {tags[0]} > {title}
            </div>
        );
    } else {
        TagElement = <div>首页 > {title}</div>;
    }

    return <>{TagElement}</>;
};

export default Crumb;
