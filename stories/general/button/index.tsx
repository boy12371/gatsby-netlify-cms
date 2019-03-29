import React, { Component, Fragment } from "react";

import Type from "./Types";
import Size from "./Size";
import Icon from "./Icon";
import Disabled from "./ButtonDisabled";
import Multiple from "./ButtonMultiple";
import Loading from "./Loading";
import Group from "./Group";
import Ghost from "./ButtonGhost";

class ButtonPage extends Component {
    render() {
        return (
            <Fragment>
                <h1 className="title">Button按钮</h1>

                <h2 className="title">什么时候用</h2>

                <p className="text">标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</p>

                <h2 className="title">演示:</h2>

                <section className="example">
                    <Type />
                </section>

                <section className="example">
                    <Icon />
                </section>

                <section className="example">
                    <Size />
                </section>

                <section className="example">
                    <Disabled />
                </section>

                <section className="example">
                    <Loading />
                </section>

                <section className="example">
                    <Multiple />
                </section>

                <section className="example">
                    <Group />
                </section>

                <section className="example">
                    <Ghost />
                </section>
            </Fragment>
        );
    }
}

export default ButtonPage;
