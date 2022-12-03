import React from "react";
import Box from "../box";
import GridRuler from "../grid-ruler";
import Grid from "./index";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Grid",
    component: Grid
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
    <div className="relative">
        <GridRuler spacing="sm" />
        <Grid container spacing="sm" justifyContent="space-between" alignItems="center" {...args}>
            <Grid item sm={3} md={3} lg={3}>
                <Box>Test Box</Box>
            </Grid>
            <Grid item sm={3} md={3} lg={3}>
                <Box>Test Box</Box>
            </Grid>
            <Grid item sm={3} md={3} lg={3}>
                <Box>Test Box</Box>
            </Grid>
        </Grid>
    </div>
);
