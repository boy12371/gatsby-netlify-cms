import React from "react";
import { storiesOf } from "@storybook/react";

import IndexPage from "./IndexPage";
import AboutPage from "./AboutPage";

storiesOf("整站组件", module)
    .add("首页", () => <IndexPage />)
    .add("关于我们", () => <AboutPage />);
