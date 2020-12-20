import React, {Fragment} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import {useTheme} from "@material-ui/styles";
import {useMediaQuery} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import * as actions from '../../../store/actions/index.actions'

const useStyles = makeStyles(theme => {
    return {
        mainGridContainer: {
            marginTop: '12em',
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
            }
        },
        sideIcon: {
            // width: '185px',
            marginLeft: '32px',

            [theme.breakpoints.down('sm')]: {
                marginTop: '2rem'
            },
            [theme.breakpoints.down('xs')]: {
                marginLeft: '0',
            }
        },
        marginBottom: {
            marginBottom: '1em',
        },
        sideText: {
            marginLeft: '5em',
            padding: '1rem',
            [theme.breakpoints.down('sm')]: {
                marginRight: '2rem',
            },
            [theme.breakpoints.down('xs')]: {
                marginLeft: '0',
                marginRight: '0'
            }
        },
        learnButtonHero: {
            ...theme.typography.learntButtonHero,
        },
    }
})

const LeftServicesIntro = (props) => {

    const dispatch = useDispatch();

    const navHandler = (val) => dispatch(actions.navHandler(val));
    const popUpHandler = (pIndex) => dispatch(actions.popupHandler(pIndex));

    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'))


    const classes = useStyles();

    const navigationHandler = () => {
        navHandler(0);
        popUpHandler(0);
    }

    return (
        <Fragment>
            <Grid justify={matchesSm ? 'center' : null} container className={classes.mainGridContainer}>
                <Grid item className={classes.sideText}>
                    <Typography variant={'h4'}>
                        {props.mainHeading}
                    </Typography>
                    <Typography className={classes.marginBottom} variant={'subtitle1'}>
                        {props.subHeading1}
                    </Typography>
                    <Typography variant={'subtitle1'}>
                        {props.subHeading2}
                    </Typography>
                    <Button onClick={() => navigationHandler()} component={Link} to={props.Link}
                            className={classes.learnButtonHero} variant='outlined' color={'primary'}>
                        <span style={{marginRight: '9px'}}>Learn More</span>
                        <ArrowForwardOutlinedIcon fill={'red'} width={15} height={15}/>
                    </Button>
                </Grid>

                <Grid item className={classes.sideIcon}>
                    <img src={props.image} alt={props.alt}/>
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default LeftServicesIntro;
