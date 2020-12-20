import {makeStyles} from "@material-ui/core/styles";
import footerAdornment from '../../../assets/Footer Adornment.svg'
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import faceBookIcon from '../../../assets/facebook.svg';
import instagramIcon from '../../../assets/instagram.svg';
import twitterIcon from '../../../assets/twitter.svg';
import {useDispatch} from "react-redux";
import * as actions from '../../../store/actions/index.actions'

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: '100%',
        position: "relative",
    },
    adornment: {
        width: '25rem',
        verticalAlign: 'bottom',
        zIndex: theme.zIndex.modal + 5,
        position: 'relative',

        [theme.breakpoints.down('md')]: {
            width: '21rem'
        }, [theme.breakpoints.down('xs')]: {
            width: '11rem',
        },
    },
    gridMainContainer: {
        position: "absolute",
        zIndex: theme.zIndex.modal + 10,
        width: '100%',
        height: '100%',
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: '0.75rem',
        fontWeight: 'bold',
        textDecoration: "none",
    },
    gridItem: {
        margin: '2.5em'
    },
    iconContainer: {
        position: "absolute",
        zIndex: theme.zIndex.modal + 20,
        top: '11rem',
        right: '2rem',
        width: '9rem',
        [theme.breakpoints.between('sm','md')]: {
            top: '9rem',
        },
        [theme.breakpoints.down('xs')]: {
            top: '4rem',
            right: '.5rem'
        }
    },
    icon: {
        width: '3rem',
        height: '3rem',

        [theme.breakpoints.down('xs')]: {
            width: '2.5rem',
            height: '2.5rem',
        }
        // bottom: '6rem',
        // left: '3rem'
    }
}))

const Footer = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const navigationHandler = (val) => dispatch(actions.navHandler(val));
    const popupHandler = (pIndex) => dispatch(actions.popupHandler(pIndex));

    const servicesPopupHandler = (val) => {
        navigationHandler(1);
        popupHandler(val);

    }


    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid className={classes.gridMainContainer} container justify="center" spacing={3}>
                    <Grid className={classes.gridItem} item>
                        <Grid spacing={2} direction='column' container>
                            <Grid onClick={navigationHandler.bind(this, 0)} item className={classes.link}
                                  component={Link} to='/'>Home</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid spacing={2} direction='column' container>
                            <Grid onClick={servicesPopupHandler.bind(0)} item className={classes.link} component={Link}
                                  to='/services'>Services</Grid>
                            <Grid onClick={servicesPopupHandler.bind(1)} item className={classes.link} component={Link}
                                  to='/customSoftware'>Custom Software Development</Grid>
                            <Grid onClick={servicesPopupHandler.bind(2)} item className={classes.link} component={Link}
                                  to='/mobileApps'>iOS/Android App Development</Grid>
                            <Grid onClick={servicesPopupHandler.bind(3)} item className={classes.link} component={Link}
                                  to='/websites'>Website Development</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid spacing={2} direction='column' container>
                            <Grid onClick={navigationHandler.bind(this, 2)} item className={classes.link}
                                  component={Link} to='/revolution'>The Revolution</Grid>
                            <Grid onClick={navigationHandler.bind(this, 2)} item className={classes.link}
                                  component={Link} to='/revolution'>Vision</Grid>
                            <Grid onClick={navigationHandler.bind(this, 2)} item className={classes.link}
                                  component={Link} to='/revolution'>Technology</Grid>
                            <Grid onClick={navigationHandler.bind(this, 2)} item className={classes.link}
                                  component={Link} to='/revolution'>Process</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid spacing={2} direction='column' container>
                            <Grid onClick={navigationHandler.bind(this, 3)} item className={classes.link}
                                  component={Link} to='/about'>About Us</Grid>
                            <Grid onClick={navigationHandler.bind(this, 3)} item className={classes.link}
                                  component={Link} to='/about'>History</Grid>
                            <Grid onClick={navigationHandler.bind(this, 3)} item className={classes.link}
                                  component={Link} to='/about'>Team</Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid spacing={2} direction='column' container>
                            <Grid onClick={navigationHandler.bind(this, 4)} item className={classes.link}
                                  component={Link} to='/contactus'>Contact Us</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img className={classes.adornment} src={footerAdornment} alt="black decorative slash"/>
            <Grid container spacing={2} alignItems="center" className={classes.iconContainer}>
                <Grid component={'a'} target = "_blank" rel='noreferrer noopener' href='https://www.facebook.com/' item className={classes.icon}>
                    <img src={faceBookIcon} alt="Facebook"/>
                </Grid>
                <Grid component={'a'} target = "_blank" rel='noreferrer noopener' href='https://www.instagram.com/' item className={classes.icon}>
                    <img src={instagramIcon} alt="Instagram"/>
                </Grid>
                <Grid component={'a'} target = "_blank" rel='noreferrer noopener' href='https://twitter.com/' item className={classes.icon}>
                    <img src={twitterIcon} alt="Twitter"/>
                </Grid>
            </Grid>

        </footer>
    );
};

export default Footer;
