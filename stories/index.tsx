import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { Button } from "antd";

storiesOf("通用", module)
    .addDecorator(withKnobs)
    .add("Button按钮", () => {
        return (
            <React.Fragment>
                <h1 className="title">按钮</h1>

                <h2 className="title">什么时候用</h2>

                <p className="text">标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>

                <h2 className="title">演示:</h2>
                <div>
                    <section className="example">
                        <Button />
                        <Button type="primary" onClick={action("Primary Button Clicked")}>
                            Primary
                        </Button>
                    </section>
                </div>
            </React.Fragment>
        );
    })
    .add("Icon图标", () => {
        return (
            <React.Fragment>
                <h1 className="title">按钮</h1>

                <h2 className="title">什么时候用</h2>

                <p className="text">标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>

                <h2 className="title">演示:</h2>
                <div>
                    <section className="example">
                        <Button />
                    </section>
                </div>
            </React.Fragment>
        );
    });

storiesOf("导航", module)
    .addDecorator(withKnobs)
    .add("按钮", () => {
        return (
            <React.Fragment>
                <h1 className="title">按钮</h1>

                <h2 className="title">什么时候用</h2>

                <p className="text">标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>

                <h2 className="title">演示:</h2>
                <div>
                    <section className="example">
                        <Button />
                    </section>
                </div>
            </React.Fragment>
        );
    });

storiesOf("数据输入", module)
    .addDecorator(withKnobs)
    .add("按钮", () => {
        return (
            <React.Fragment>
                <h1 className="title">按钮</h1>

                <h2 className="title">什么时候用</h2>

                <p className="text">标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>

                <h2 className="title">演示:</h2>
                <div>
                    <section className="example">
                        <Button />
                    </section>
                </div>
            </React.Fragment>
        );
    });
