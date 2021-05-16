import {Story} from "@storybook/react";
import Loading from "./Loader";
import React from "react";

export default {
    title: 'Loading',
    component: Loading,
};

const Template: Story = () => {
    return (
        <Loading>
        </Loading>
    )
}

export const LoaderComponent = Template.bind({});
LoaderComponent.args = {};
