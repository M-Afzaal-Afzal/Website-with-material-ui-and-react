import React, {Fragment, useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import revolutionBackground from '../../../assets/repeatingBackground.svg';
import {NavigationContext} from "../../../context/NavigationContext";
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => {
    return {
        learnButton: {
            ...theme.typography.learntButtonHero,
            height: 45,
            width: 145,
        },
        contentGridMain: {
            textAlign: 'center',
        },
        card: {
            boxShadow: theme.shadows[10],
            position: 'absolute',
            padding: '10em',
            borderRadius: '15px',
            [theme.breakpoints.down('sm')]: {
                paddingTop: '8em',
                paddingBottom: '8em',
                paddingLeft: '0',
                paddingRight: '0',
                borderRadius: '0'
            }
        },
        revolutionBackground: {
            backgroundImage: `url(${revolutionBackground})`,
            // backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
        }
    }
})

const RevolutionCard = (props) => {
    const navHandler = useContext(NavigationContext).navChangeHandler;

    const classes = useStyles();

    const navigationHandler = () => {
        navHandler(2);
    }

    return (
        <Grid container justify={'center'} alignItems={'center'} style={{height: '60em', marginTop: '12em'}}>
            <Card className={classes.card}>
                <CardContent>
                    <Grid container justify={'center'} className={classes.contentGridMain}>
                        <Grid item>
                            <Typography variant={'h3'}>
                                The Revolution
                            </Typography>
                            <Typography variant={'subtitle1'} mb={2}>
                                Visionary insights coupled with cutting-edge technology is a recipe for revolution.
                            </Typography>
                            <Button component={Link} to={'/revolution'} onClick={navigationHandler} className={classes.learnButton} variant='outlined' color={'primary'}>
                                <span style={{marginRight: '9px'}}>Learn More</span>
                                <ArrowForwardOutlinedIcon fill={'red'} width={15} height={15}/>
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <div className={classes.revolutionBackground}></div>
        </Grid>

    );
};

export default RevolutionCard;
