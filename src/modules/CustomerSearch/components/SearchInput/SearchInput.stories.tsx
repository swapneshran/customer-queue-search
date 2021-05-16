import React, { FC, ReactNode } from "react";
import {SearchInputProps} from "./types";
import SearchInput from "./SearchInput";
import {Story} from "@storybook/react";
import { action } from '@storybook/addon-actions';

export default {
    title: 'Search Input Component',
    component: SearchInput,
};

const Template: Story<SearchInputProps> = (args) => <SearchInput {...args} />;

export const SearchInputWithHandler = Template.bind({});
SearchInputWithHandler.args = {
    onSearchInputChange: action('value after change')
};
