import React, {useContext} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import Lottie from "react-lottie";
import {makeStyles} from "@material-ui/styles";
import animationData from "../../../animations/landinganimation/data";
import {Link} from 'react-router-dom'
import {NavigationContext} from "../../../context/NavigationContext";

const useStyles = makeStyles(theme => {
    return {
        buttonContainer: {
            margin: '0',
            marginTop: '1em',
            width: '100%',
        },
        estimateButton: {
            ...theme.typography.estimate,
            borderRadius: 50,
            height: 45,
            width: 145,
            "&:hover": {
                backgroundColor: theme.palette.secondary.light,
            }
        },
        learnButtonHero: {
            ...theme.typography.learntButtonHero,
            height: 45,
            width: 145,
            fontSize: '0.9rem',
        },
        heroText: {
            minWidth: '8.4em'
        },
        animation: {
            minWidth: '20em',
            maxWidth: '35em',
            marginTop: '3em',
            marginLeft: '10%',
        }
    }
})


const HeroSection = () => {

    const navHandler = useContext(NavigationContext).navChangeHandler;
    const classes = useStyles();

    const navigationHandler = () => {
        navHandler(2);
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <>
            <Grid container justify={'center'} alignItems={'center'} direction="row">
                <Grid sm item>
                    <Typography className={classes.heroText} variant={'h2'} align={'center'}>Bringing West
                        Cost <br/> Technology <br/> to the Midwest</Typography>
                    <Grid className={classes.buttonContainer} container spacing={5} justify={'center'}>
                        <Grid item>
                            <Button component={Link} to={'/estimate'} className={classes.estimateButton} variant='contained' color={"secondary"}>Free
                                Estimate</Button>
                        </Grid>
                        <Grid item>
                            <Button onClick={navigationHandler} component={Link} to={'/revolution'} className={classes.learnButtonHero} variant='outlined' color={'primary'}>
                                <span style={{marginRight: '9px'}}>Learn More</span>
                                <ArrowForwardOutlinedIcon fill={'red'} width={15} height={15}/>
                            </Button>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={classes.animation} sm item>
                    <Lottie options={defaultOptions}
                            height={'100%'}
                            width={'100%'}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default HeroSection;
