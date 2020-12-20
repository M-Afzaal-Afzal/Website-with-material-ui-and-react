import React from 'react';
import { makeStyles, useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import ArrowForwardOutlinedIcon from '@material-ui/icons/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import IconButton from "@material-ui/core/IconButton";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles(theme => {
    return {
        icon: {
            fontSize: 25,
        },
        softwareText: {
            maxWidth: '40em',
        },
        arrowContainer: {
            marginTop: '.5em',
        },
        arrowContainerStarting: {
            marginLeft: '-3.5em',
            marginRight: '1em'
        }
    }
})

const ServicesIntro = (props) => {

    const classes = useStyles();
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container direction={'row'} justify={matchesMd ? 'center' : null}>

            <Grid item className={matchesMd ? null : `${classes.arrowContainer} ${classes.arrowContainerStarting}`}>

                {matchesMd ? null :
                    <IconButton disableFocusRipple color="primary" aria-label="services to custom soft dev">
                        <ArrowBackOutlinedIcon
                            color={"primary"}
                            className={`${classes.icon}`}
                        />
                    </IconButton>}

            </Grid>
            <Grid item className={classes.softwareText} style={{ textAlign: matchesMd ? 'center' : 'left' }} >
                <Typography variant={'h2'}>{props.heading}</Typography>
                <Typography variant={'body2'} paragraph>
                    {props.paragraph1}
                </Typography>
                <Typography variant={'body2'} paragraph>
                    {props.paragraph2}
                </Typography>
                <Typography variant={'body2'} paragraph>
                    {props.paragraph3}
                </Typography>
                <Typography variant={'body2'} paragraph>
                    {props.paragraph4}
                </Typography>
            </Grid>
            <Grid item className={classes.arrowContainer}>
                {
                    matchesMd ? null :
                        <IconButton disableFocusRipple color="primary" aria-label="web dev to custom soft dev">
                            <ArrowForwardOutlinedIcon
                                color={"primary"}
                                className={`${classes.icon} ${classes.endingIcon}`} />
                        </IconButton>
                }

            </Grid>
        </Grid>
    );
};

export default ServicesIntro;
