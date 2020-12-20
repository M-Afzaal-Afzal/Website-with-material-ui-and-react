import {withRouter} from 'react-router-dom';
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import IconBulb from '../../../assets/bulb.svg'
import IconWatch from '../../../assets/stopwatch.svg'
import IconCash from '../../../assets/cash.svg';
import { useTheme } from "@material-ui/styles";
import { Box, useMediaQuery } from "@material-ui/core";
import Lottie from 'react-lottie';
import ServicesIntro from "../ServicesIntro";
import documentsAnimation from '../../../animations/documentsAnimation/data';
import scaleAnimation from '../../../animations/scaleAnimation/data';
import rootTree from '../../../assets/root.svg';
import CallToAction from "../../LandingPage/CallToAction/CallToAction";

const useStyles = makeStyles(theme => {

    return {
        mainGridContainer: {
            paddingTop: '2em',

            [theme.breakpoints.down('sm')]: {
                paddingTop: '1em',
            },
            [theme.breakpoints.down('xs')]: {
                paddingTop: '0',
            }
        },
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
        featuresContainer: {
            marginTop: '10em',
            marginBottom: '15em',
            [theme.breakpoints.down('sm')]: {
                marginTop: '6em',
                marginBottom: '8em',
            },
            [theme.breakpoints.down('xs')]: {
                marginTop: '3em',
                marginBottom: '6em',
            }
        },
        mobileMargin: {
            marginTop: '10em',
            marginBottom: '10em',
            [theme.breakpoints.down('sm')]: {
                marginTop: '6em',
                marginBottom: '6em',
            },
            [theme.breakpoints.down('xs')]: {
                marginTop: '4em',
                marginBottom: '4em',
            }
        },
        callToAction: {
            paddingLeft: 0,
            paddingRight: 0,
            width: '100%'
        }
    }
})

const CustomSoftware = (props) => {

    const defaultOptionsDocument = {
        loop: true,
        autoplay: true,
        animationData: documentsAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const defaultOptionsScale = {
        loop: true,
        autoplay: true,
        animationData: scaleAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const classes = useStyles();
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

    return (
            <Grid container direction={'column'} alignItems={matchesSm ? 'center' : 'flex-start'}
                className={classes.mainGridContainer}>
                <Grid style={{ width: '100%' }} className={classes.GridRowContainer} item>
                    <ServicesIntro
                        heading='Custom Software Development'
                        paragraph1=' Whether we’re replacing old software or inventing new solutions, Arc Development is here to help
                    your business tackle technology.'
                        paragraph2='Using regular commercial software leaves you with a lot of stuff you don’t need, without some of
                    the stuff you do need, and ultimately controls the way you work. Without using any software at
                    all you risk falling behind competitors and missing out on huge savings from increased
                    efficiency'
                        paragraph3='Our custom solutions are designed from the ground up with your needs, wants, and goals at the
                    core. This collaborative process produces finely tuned software that is much more effective at
                    improving your workflow and reducing costs than generalized options.'
                        paragraph4='We create exactly what you what, exactly how you want it.'
                    />
                </Grid>
                <Grid style={{ alignSelf: 'center' }} className={`${classes.featuresContainer} ${classes.GridRowContainer}`} item container
                    direction={'row'} align={'center'} justify={'center'} alignItems={'center'}>
                    <Grid item md={4} xs={12}>
                        <Typography variant={'h4'}>
                            Save Energy
                        </Typography>
                        <img src={IconBulb} alt="Bulb Icon" />
                    </Grid>
                    <Grid className={matchesSm ? classes.mobileMargin : null} item md={4} xs={12}>
                        <Typography variant={'h4'}>
                            Save Time
                        </Typography>
                        <img src={IconWatch} alt="Bulb Icon" />
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Typography variant={'h4'}>
                            Save Money
                        </Typography>
                        <img src={IconCash} alt="Bulb Icon" />
                    </Grid>
                </Grid>
                <Grid className={classes.GridRowContainer} item container>
                    <Grid item xs={12} md={6}>
                        <Typography variant={'h4'}>
                            Digital Documents & Data
                        </Typography>
                        <Typography variant={'body2'} paragraph>
                            Reduce Errors. Reduce Waste. Reduce Costs.
                        </Typography>
                        <Typography variant={'body2'} paragraph>
                            Billions are spent annually on the purchasing, printing, and distribution of paper. On top
                            of the massive environmental impact this has, it causes harm to your bottom line as well.
                        </Typography>
                        <Typography variant={'body2'} paragraph>
                            By utilizing digital forms and documents you can remove these obsolete expenses, accelerate
                            your communication, and help the Earth.
                        </Typography>
                    </Grid>
                    <Grid align={'center'} style={{ alignSelf: 'center', width: '80%' }} item xs={12} md={6}>
                        <Lottie options={defaultOptionsDocument}
                            style={{ maxWidth: 375 }}
                            isStopped={true}
                            isPaused={true} />
                    </Grid>
                </Grid>
                <Grid className={classes.GridRowContainer} item container justify={'center'} style={{ marginTop: '10em' }}>
                    <Grid item sm={12} md={6}>
                        <Lottie options={defaultOptionsScale}
                            style={{ maxWidth: 375 }}
                            isStopped={true}
                            isPaused={true} />
                    </Grid>
                    <Grid item sm={12} md={6} style={{ textAlign: matchesSm ? 'center' : 'right' }}>
                        <Typography variant={"h4"}>
                            Scale
                        </Typography>
                        <Typography variant={'body2'}>
                            Whether you’re a large brand, just getting started, or taking off right now, our application
                            architecture ensures pain-free growth and reliability.
                        </Typography>
                    </Grid>

                </Grid>
                <Grid className={classes.GridRowContainer} item container align={'center'} direction={'column'} justify={'center'} alignItems={'center'} style={{ marginTop: matchesSm ? '5em' : '10em',marginBottom:matchesSm ? '5em' : '10em' }}>
                    <Grid item container justify={'center'} alignItems={'center'} style={{ marginBottom: matchesSm ? '.5em' : '2em' }}>
                        <img src={rootTree} width={'450em'} height={'450em'} alt="Tree with roots" />
                    </Grid>
                    <Grid item>
                        <Typography variant={'h4'}>
                            Root-Cause Analysis
                        </Typography>
                        <Box mb={1.2} />
                        <Typography variant={'body2'} paragraph>
                            Many problems are merely symptoms of larger, underlying issues.
                        </Typography>
                        <Typography variant={'body2'} paragraph>
                            We can help you thoroughly examine all areas of your business to develop a holistic plan for
                            the most effective implementation of technology
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item className={classes.callToAction}>
                    <CallToAction />
                </Grid>
            </Grid>
    );
};

export default withRouter(CustomSoftware) ;
