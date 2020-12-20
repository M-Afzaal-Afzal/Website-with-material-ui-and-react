import React from 'react';
import { Box, Grid, useMediaQuery, useTheme } from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";

const WebDevFeature = (props) => {
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Grid item container direction={matchesSm ? 'column' : 'row'} alignItems={'center'}>
            <Grid item align={'center'} style={{ marginLeft: matchesSm ? null : props.left, marginRight: '1em', maxWidth: '20em' }}>
                <Typography variant={'h4'}>
                    {props.heading}
                </Typography>
                <Box mb={2} />
                <img style={{ width: '100%' }} src={props.image} alt="analytics" />
            </Grid>
            <Grid item style={{ maxWidth: '26em' }} align={matchesSm ? 'center' : null}>
                <Typography variant={"body2"} paragraph>
                    {props.p1}
                </Typography>
                <Typography variant={"body2"} paragraph>
                    {props.p2}
                </Typography>
                <Typography variant={"body2"} paragraph>
                    {props.p3}
                </Typography>
                <Typography variant={"body2"} paragraph>
                    {props.p4}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default WebDevFeature;
