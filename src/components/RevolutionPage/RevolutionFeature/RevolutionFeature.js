import React from 'react';
import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Lottie from 'react-lottie';
import animationData from '../../../animations/technologyAnimation/data';


const useStyles = makeStyles(theme => ({
    GridRowContainer: {
        paddingLeft: '5em',
        paddingRight: '5em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '2.5em',
            paddingRight: '2.5em',
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '1em',
            paddingRight: '1em',
        }
    },
    sideImage: {
        width: '100%'
    },
    marginRight: {
        marginRight: '5em',
        [theme.breakpoints.down('md')]: {
            marginRight: '0',
        }
    },
    marginLeft: {
        marginLeft: '5em',
        [theme.breakpoints.down('md')]: {
            marginLeft: '0',
        }
    },
    marginTop: {
        marginTop: '5em',
    },
    marginBottom: {
        [theme.breakpoints.down('md')]: {
            marginBottom: '5em'
        }
    },
}))

const RevolutionFeature = (props) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const theme = useTheme();
    const classes = useStyles();


    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
    const matchesLg = useMediaQuery(theme.breakpoints.down('lg'));



    const first = props.animation ?
        (
            <Grid item xs={12} lg={6} direction={matchesLg ? "column" : 'row'} container alignItems={'center'} justify={'flex-end'}>
                <Grid>
                    <Lottie
                        options={defaultOptions}
                        style={{ maxWidth: '40em' }}
                        height={'auto'}
                    />
                </Grid>

            </Grid>
        )
        :
        (<Grid item lg={6} xs={12}>
            <Grid container justify={'center'} alignItems={'center'}
                style={{ height: '100%' }}>
                <img
                    style={{ maxWidth: props.maxImageWidth }}
                    className={`${classes.sideImage} ${classes.marginBottom} ${props.imageLeft ? classes.marginRight : classes.marginLeft}`}
                    src={props.image} alt="Vision" />
            </Grid>
        </Grid>)

    const second = (
        <Grid item alignItems={'center'} justify={'center'} container direction={'column'} lg={6} xs={12}
            align={matchesMd ? 'center' : props.imageLeft ? 'right' : 'left'}
            style={{ maxWidth: props.maxTextWidth }}
        >

            <Grid item >
                <Typography style={{ color: props.headingColor }} variant={'h4'} gutterBottom>
                    {props.heading}
                </Typography>
                {props.p1 ?
                    <Typography style={{ color: props.textColor }} variant={'body2'} paragraph>
                        {props.p1}
                    </Typography>
                    :
                    null}
                {props.p2 ?
                    <Typography style={{ color: props.textColor }} variant={'body2'} paragraph>
                        {props.p2}
                    </Typography>
                    :
                    null}
                {props.p3 ?
                    <Typography style={{ color: props.textColor }} variant={'body2'} paragraph>
                        {props.p3}
                    </Typography>
                    :
                    null}
                {props.p4 ?
                    <Typography style={{ color: props.textColor }} variant={'body2'} paragraph>
                        {props.p4}
                    </Typography>
                    :
                    null}
                {props.p5 ?
                    <Typography style={{ color: props.textColor }} variant={'body2'} paragraph>
                        {props.p5}
                    </Typography>
                    :
                    null}
                {props.p6 ?
                    <Typography style={{ color: props.textColor }} variant={'body2'} paragraph>
                        {props.p6}
                    </Typography>
                    :
                    null}
                {props.p7 ?
                    <Typography style={{ color: props.textColor }} variant={'body2'} paragraph>
                        {props.p7}
                    </Typography>
                    :
                    null}
            </Grid>


        </Grid>)


    return (
        <Grid container
            justify={matchesMd ? 'center' : 'space-between'}
            // alignItems={'center'}
            className={`${classes.GridRowContainer} ${classes.marginTop}`}
            style={{
                height: matchesMd ? props.height : 'auto',
            }}
            alignItems={'center'}
        >
            {props.imageLeft ? first : second}
            {props.imageLeft ? second : first}

        </Grid>
    );
};

export default RevolutionFeature;
