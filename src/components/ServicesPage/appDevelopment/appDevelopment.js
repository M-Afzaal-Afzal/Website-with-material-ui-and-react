import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import ServicesIntro from "../ServicesIntro";
import { Container, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import mobileAnimation from '../../../animations/integrationAnimation/data'
import Lottie from "react-lottie";
import swiss from '../../../assets/swissKnife.svg';
import access from '../../../assets/extendAccess.svg';
import engagement from '../../../assets/increaseEngagement.svg';

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
    mainGridContainer: {
        paddingTop: '2em',
        paddingBottom: '10em',

        [theme.breakpoints.down('sm')]: {
            paddingTop: '1em',
            paddingBottom: '5em',
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: '0',
            paddingBottom: '3em',
        }
    },
}))

const AppDevelopment = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));

    const defaultOptionsMobile = {
        loop: true,
        autoplay: true,
        animationData: mobileAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <Container>
            <Grid container direction={'column'} className={classes.mainGridContainer}>
                <Grid style={{ width: '100%' }} item className={classes.GridRowContainer}>
                    <ServicesIntro
                        heading='iOS/Android App Development'
                        paragraph1=' Mobile apps allow you to take your tools on the go.'
                        paragraph2='Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.'
                        paragraph3='Convenience. Connection.'
                    />
                </Grid>
                <Grid alignItems={matchesSm ? 'center' : null} justify={matchesSm ? 'center' : null} spacing={1}
                    style={{ marginTop: '8em', marginBottom: '15em' }} className={classes.GridRowContainer} item container>
                    <Grid item md={4} xs={12} style={{ textAlign: matchesSm ? 'center' : 'auto' }}>

                        <Typography variant={"h4"}>
                            Integration
                        </Typography>
                        <Typography variant={'body2'} paragraph>
                            Our technology enables an innate interconnection between web and mobile applications,
                            putting everything you need right in one convenient place.
                        </Typography>
                        <Typography variant={'body2'} paragraph>
                            This allows you to extend your reach, reinvent interactions, and develop a stronger
                            relationship with your users than ever before.
                        </Typography>


                    </Grid>
                    <Grid item md={4} xs={12}>

                        <Lottie options={defaultOptionsMobile}
                            style={{ maxWidth: '20em' }}
                            isStopped={true}
                            isPaused={true} />

                    </Grid>
                    <Grid item md={4} xs={12} style={{ textAlign: matchesSm ? 'center' : 'right' }}>

                        <Typography variant={"h4"}>
                            Simultaneous Platform Support
                        </Typography>
                        <Typography variant={'body2'} paragraph>
                            Our cutting-edge development process allows us to create apps for iPhone, Android, and
                            tablets — all at the same time.
                        </Typography>
                        <Typography variant={'body2'} paragraph>
                            This significantly reduces costs and creates a more unified brand experience across all
                            devices.
                        </Typography>

                    </Grid>

                </Grid>
                <Grid spacing={2} item container justify={'center'} align={'center'}
                    direction={matchesMd ? 'column' : 'row'}>
                    <Grid item sm>
                        <Typography variant={'h4'}>
                            Extend Functionality
                        </Typography>
                        <img src={swiss} alt="swiss knife image" />
                    </Grid>
                    <Grid item sm style={{ marginTop: matchesMd ? '10em' : null, marginBottom: matchesMd ? '10em' : null }}>
                        <Typography variant={'h4'}>
                            Extend Access
                        </Typography>
                        <img style={{ maxWidth: matchesXs ? '20em' : '28em' }} src={access} alt="access image" />
                    </Grid>
                    <Grid item sm>
                        <Typography variant={'h4'}>
                            Increase Engagement
                        </Typography>
                        <img src={engagement} alt="engagement" />
                    </Grid>

                </Grid>
            </Grid>
        </Container>
    );
};

export default AppDevelopment;
