import React, { FC, ReactNode } from "react";
import {CustomerInfoProp} from "./types";
import Customer from "./Customer";
import {Story} from "@storybook/react";
import CustomerMock from "../../../../models/CustomerMock";

export default {
    title: 'Customer Card Component',
    component: Customer,
};

const Template: Story<CustomerInfoProp> = (args) => <Customer {...args} />;

export const CustomerInfoCardWithNameAndEmail = Template.bind({});
CustomerInfoCardWithNameAndEmail.args = {
    customerInfo: CustomerMock
};
