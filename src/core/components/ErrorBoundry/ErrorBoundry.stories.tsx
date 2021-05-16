import {Story} from "@storybook/react";
import ErrorBoundary from "./ErrorBoundary";
import React, {FC} from "react";

export default {
    title: 'Error Boundary',
    component: ErrorBoundary,
};

const ErrorComponent: FC = ()=> {
    throw  new  Error('Something went wrong')
}
const Template: Story = () => {
    return (
        <ErrorBoundary data-testid={'customerListGrid'}>
             <ErrorComponent/>
        </ErrorBoundary>
    )
}

export const ErrorComponentDemo = Template.bind({});
ErrorComponentDemo.args = {};
