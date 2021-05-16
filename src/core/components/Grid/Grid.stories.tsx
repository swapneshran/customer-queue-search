import Grid from "./Grid";
import {Story} from "@storybook/react";
import GridItem from "./Item";
import React from "react";

export default {
    title: 'Grid',
    component: Grid,
};

const Template: Story = () => {
    return (
        <Grid data-testid={'customerListGrid'}>
            <GridItem>1</GridItem>
            <GridItem>2</GridItem>
            <GridItem>3</GridItem>
            <GridItem>4</GridItem>
            <GridItem>5</GridItem>
            <GridItem>6</GridItem>
        </Grid>
    )
}

export const GridLayout = Template.bind({});
GridLayout.args = {};
