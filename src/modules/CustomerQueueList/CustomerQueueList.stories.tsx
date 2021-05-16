import React, { FC, ReactNode } from "react";
import {CustomerQueueProps} from "./types";
import CustomerQueueList from "./CustomerQueueList";
import {Story} from "@storybook/react";
import CustomerMock from "../../models/CustomerMock";
import { action } from '@storybook/addon-actions';

export default {
    title: 'Customer Queue List Component',
    component: CustomerQueueList,
};

const Template: Story<CustomerQueueProps> = (args) => <CustomerQueueList {...args} />;

export const CustomerQueueListWithoutLoading = Template.bind({});
CustomerQueueListWithoutLoading.args = {
    fetchCustomers: action('fetching customer list'),
    isLoadingCustomers: false,
    customers: [CustomerMock, CustomerMock]
};
