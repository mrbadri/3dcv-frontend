import Box from "../src/components/box";
import Grid from "../src/components/grid";
import GridRuler from "../src/components/grid-ruler";

export default function Home() {
    return (
        <div className="relative">
            <GridRuler spacing="sm" />
            <Grid container spacing="sm" justifyContent="space-between" alignItems="center">
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
}
