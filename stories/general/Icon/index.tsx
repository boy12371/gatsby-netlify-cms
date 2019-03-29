import React, { Component, Fragment } from "react";
import DirectionalIcons from "./Direction";
import SuggestedIcons from "./Suggested";
import ApplicationIcons from "./Application";
import Brands from "./Brands";

class IconPage extends Component {
    render() {
        const exampleStyle = {
            display: "inline-block",
            marginLeft: "20px",
            padding: "10px 20px",
            background: "#eee"
        };

        return (
            <Fragment>
                <h1 className="title">Icon图标</h1>

                <h2 className="title">怎么使用</h2>
                <p className="text">
                    使用标签声明组件，指定图标对应的 type 属性。可以通过 theme 属性来设置不同的主题风格的图标，也可以通过设置 spin
                    属性来实现动画旋转效果。
                </p>

                <div style={exampleStyle}>
                    &lt;<span style={{ color: "red" }}>Icon</span> <span style={{ color: "green" }}>type</span>="
                    <span style={{ color: "blue" }}>link</span>" /&gt;
                </div>

                <DirectionalIcons />

                <SuggestedIcons />

                <ApplicationIcons />

                <Brands />
            </Fragment>
        );
    }
}

export default IconPage;
