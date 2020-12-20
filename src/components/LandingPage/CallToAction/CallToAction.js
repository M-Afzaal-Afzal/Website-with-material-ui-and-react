import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
import {useTheme} from "@material-ui/styles";
import {useMediaQuery} from "@material-ui/core";
import backgroundCallToAction from '../../../assets/background.jpg';
import backgroundMobile from '../../../assets/mobileBackground.jpg'
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import * as actions from '../../../store/actions/index.actions'


const useStyle = makeStyles(theme => {
    return {
        learnButton: {
            ...theme.typography.learntButtonHero,
            color: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
            padding: '5px',
            fontSize: '.7rem',
            '&:hover': {
                borderColor: theme.palette.primary.main,
                borderWidth: '2px',
            }
        },
        freeEstimate: {
            ...theme.typography.estimate,
            backgroundColor: theme.palette.secondary.main,
            width: 205,
            height: 80,
            fontSize: '1.5rem',
            boxShadow: theme.shadows[3],
            "&:hover": {
                backgroundColor: theme.palette.secondary.light,
                boxShadow: theme.shadows[5],
            }
        },
        background: {
            width: '100%',
            height: '60em'
        },
        arrowIcon: {
            width: '.5em',
        }
    }
})

const CallToAction = () => {

    const dispatch = useDispatch();

    const navHandler = (val) => dispatch(actions.navHandler(val));

    const theme = useTheme();
    const classes = useStyle();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));

    const navigationHandler = () => {
        navHandler(2);
    }

    return (
        <Grid  style={{background: matches ? `url(${backgroundMobile}) center/cover` : `url(${backgroundCallToAction}) center/cover fixed`}}
               className={classes.background} container alignItems={'center'}>
            <Grid direction={matchesSm ? 'column' : 'row'}
                  style={{ textAlign: matchesSm ? 'center' : 'left',}} container
                  justify={matchesSm ? "center" : 'space-between'} alignItems={'center'}>
                <Grid item style={{marginLeft: matchesSm ? '0' : '5em'}}>
                    <Typography variant={'h2'}
                                style={{marginBottom: matchesSm ? '0.35em' : '1em', lineHeight: matchesSm ? 1.1 : 1.5}}>
                        Simple Software.
                        {matchesSm ? <> <br/><br/> </> : <br/>}
                        Revolutionary Results.
                    </Typography>
                    <Typography variant={"subtitle2"} style={{fontSize: matchesSm ? '1.25rem' : '1.6rem',}}>
                        Take advantage of the 21st Century.
                    </Typography>
                    <Button onClick={navigationHandler} component={Link} to={'/revolution'} className={classes.learnButton} variant='outlined' color={'primary'}
                            style={{marginBottom: matchesSm ? '2em' : '0'}}>
                        <span style={{marginRight: '5px'}}>Learn More</span>
                        <ArrowForwardOutlinedIcon className={classes.arrowIcon} fill={'red'} width={15} height={15}/>
                    </Button>
                </Grid>
                <Grid item style={{marginRight: matchesSm ? '0' : '5em'}}>
                    <Button component={Link} to={'/estimate'} className={classes.freeEstimate}>
                        Free Estimate
                    </Button>
                </Grid>
            </Grid>
            <div/>

        </Grid>
    );
};

export default CallToAction;
