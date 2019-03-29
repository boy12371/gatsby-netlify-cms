import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import "antd/dist/antd.less";
import "../stories/css/style.css";
import "../stories/css/icons.css";

setOptions({
    name: "匡架ReactAntd组件",
    downPanelInRight: true
});

// Stories loader
const req = require.context("../stories", true, /\.tsx$/);

function loadStories() {
    req.keys().forEach(req);
}

// Initialize react-storybook
configure(loadStories, module);
