import React, { Component, Fragment } from "react";
import { action } from "@storybook/addon-actions";
import { Radio, Button } from "antd";

class Size extends Component {
    state = {
        size: "default"
    };

    render() {
        const size = this.state.size;

        return (
            <Fragment>
                <h3 className="ex-title">Size</h3>

                <div>
                    <Radio.Group className="mb20" value={size} onChange={this.handleSizeChange}>
                        <Radio.Button value="large" onClick={action("Large Size")}>
                            Large
                        </Radio.Button>
                        <Radio.Button value="default" onClick={action("Default Size")}>
                            Default
                        </Radio.Button>
                        <Radio.Button value="small" onClick={action("Small Size")}>
                            Small
                        </Radio.Button>
                    </Radio.Group>
                    <br />
                    <br />
                    <Button type="primary" size={"default"} onClick={action("Primary Button Click")}>
                        Primary
                    </Button>
                    <Button className="ml20" size={"default"} onClick={action("Default Button Click")}>
                        Default
                    </Button>
                    <Button className="ml20" type="dashed" size={"default"} onClick={action("Dashed Button Click")}>
                        Dashed
                    </Button>
                    <Button className="ml20" type="danger" size={"default"} onClick={action("Danger Button Click")}>
                        Danger
                    </Button>
                </div>
            </Fragment>
        );
    }

    handleSizeChange = (e: any) => this.setState({ size: e.target.value });
}

export default Size;
