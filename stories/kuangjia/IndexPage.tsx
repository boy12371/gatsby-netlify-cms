import React, { FC, Fragment } from "react";
import Logo from "../../src/components/base/Logo";

// import logoFile from "../../static/img/logo.svg";
import logoFile from "../../src/assets/img/logo.png";

const IndexPage: FC = ({}) => {
    const dataSource = { imgUrl: logoFile, style: { width: "160px" } };

    return (
        <Fragment>
            <Logo dataSource={dataSource} />
        </Fragment>
    );
};

export default IndexPage;
