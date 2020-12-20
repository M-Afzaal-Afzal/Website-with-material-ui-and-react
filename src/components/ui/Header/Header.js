import React, {Fragment} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Fab from '@material-ui/core/Fab';
import {makeStyles} from '@material-ui/core/styles';
import logo from '../../../assets/logo.svg';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import {useTheme} from "@material-ui/styles";
import {useMediaQuery} from "@material-ui/core";
import ScrollTop from "../ScrollTop";
import HeaderTabs from "./HeaderTabs/HeaderTabs";
import Drawer from "./Drawer/Drawer";
import {useDispatch} from "react-redux";
import * as actions from '../../../store/actions/index.actions'

const useStyles = makeStyles((theme) => ({

    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginTop: '-1.5rem',
        [theme.breakpoints.down('md')]: {
            marginTop: '-2.5rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '-1rem',
        }

    },
    logo: {
        height: '6rem',
        [theme.breakpoints.down('md')]: {
            height: '5rem'
        },
        [theme.breakpoints.down('xs')]: {
            height: '4.5rem'
        }
    },
    logoContainer: {
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    appBar: {
        zIndex: theme.zIndex.modal + 1
    }

}));


const Header = (props) => {

    const theme = useTheme();
    const classes = useStyles();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const routes = [
        {link: '/', name: 'Home'},
        {link: '/services', name: 'Services'},
        {link: '/revolution', name: 'The Revolution'},
        {link: '/about', name: 'About Us'},
        {link: '/contactus', name: 'Contact Us'},
        {link: '/estimate', name: 'Free Estimate'},
    ]

    const dispatch = useDispatch();


    const navigationHandler = (val) => dispatch(actions.navHandler(val));

    const handleChange = (event, newValue) => {
       navigationHandler(newValue);
    };



    const headerTabs = (
        <HeaderTabs routes={routes} handleChange={handleChange}/>
    )



    return (
        <Fragment>
            <AppBar className={classes.appBar} position='fixed'>
                <Toolbar disableGutters>
                    <Button disableRipple className={classes.logoContainer} component={Link} to='/'
                            onClick={handleChange}>
                        <img src={logo} alt="Logo" className={classes.logo}/>
                    </Button>
                    {matches ? <Drawer routes={routes}/> : headerTabs}
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor"/>
            <div className={classes.toolbarMargin}/>

            {/*from bottom to up icon*/}
            <ScrollTop {...props}>
                <Fab color={'secondary'} size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon/>
                </Fab>
            </ScrollTop>

        </Fragment>
    );
};

export default Header;
