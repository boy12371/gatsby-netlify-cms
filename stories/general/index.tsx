import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import ButtonPage from "./button";
import IconPage from "./Icon";

storiesOf("通用", module)
    .addDecorator(withKnobs)
    .add("Button按钮", () => <ButtonPage />)
    .add("Icon图标", () => <IconPage />);
