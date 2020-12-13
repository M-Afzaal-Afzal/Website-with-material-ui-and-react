import React, {useContext} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import {makeStyles} from "@material-ui/styles";
import infoBackground from '../../../assets/infoBackground.svg';
import {useMediaQuery} from "@material-ui/core";
import {useTheme} from "@material-ui/styles";
import {NavigationContext} from "../../../context/NavigationContext";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => {
    const navHandler = useContext(NavigationContext).navChangeHandler;

    const navigationHandler = (val) => {
        navHandler(val);
    }

    return {
        learnButton: {
            ...theme.typography.learntButtonHero,
            color: 'white',
            borderColor: 'white',
            padding: '5px',
            fontSize: '11.2px',
            '&:hover': {
                borderColor: 'white',
                borderWidth: '2px'
            }
        },
        infoBackground: {
            width: '100%',
            height: '100%',
            background: `url(${infoBackground}) center/cover`
        },
        floatingText: {
            position: 'absolute',
        },
        arrowIcon: {
            width: '.5em'
        }
    }
})

const InfoBlock = () => {

    const navHandler = useContext(NavigationContext).navChangeHandler;

    const classes = useStyles();
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('xs'));

    const navigationHandler = (val) => {
        navHandler(val);
    }

    return (
       <Grid container style={{height: '60em'}} justify={'center'} alignItems={'center'}>
           <Grid container justify={matchesSm ? 'center' : 'space-between'} className={classes.floatingText}>
               <Grid xs={matchesSm ? 12 : null} item style={{marginLeft: matchesSm ? '0' : '5rem', textAlign: matchesSm ? 'center' : 'left', marginBottom: matchesSm ? '10em': null}}>
                   <Typography variant={'h2'} style={{color: 'white'}}>
                       About Us
                   </Typography>
                   <Typography variant={'subtitle2'} >
                       Let's get personal.
                   </Typography>
                   <Button component={Link} to={'/about'} onClick={() => navigationHandler(3)} className={classes.learnButton} variant='outlined' color={'primary'}>
                       <span style={{marginRight: '9px'}}>Learn More</span>
                       <ArrowForwardOutlinedIcon className={classes.arrowIcon} fill={'red'} width={15} height={15}/>
                   </Button>
               </Grid>
               <Grid xs={matchesSm ? 12 : null} item style={{marginRight: matchesSm ? '0' : '5rem', textAlign: matchesSm ? 'center' : 'right' }}>
                   <Typography variant={'h2'} style={{color: 'white'}}>
                       Contact Us
                   </Typography>
                   <Typography variant={'subtitle2'} >
                       Say hello! 👋🏻
                   </Typography>
                   <Button component={Link} to={'/contactus'} onClick={() => navigationHandler(4)} className={classes.learnButton} variant='outlined' color={'primary'}>
                       <span style={{marginRight: '9px'}}>Learn More</span>
                       <ArrowForwardOutlinedIcon className={classes.arrowIcon} fill={'red'} width={15} height={15}/>
                   </Button>
               </Grid>
           </Grid>
          <div className={classes.infoBackground}/>
       </Grid>
    );
};

export default InfoBlock;
