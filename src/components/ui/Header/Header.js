import React, {useState, useContext, Fragment} from 'react';
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
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {NavigationContext} from "../../../context/NavigationContext";

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
    drawerIconContainer: {
        marginLeft: 'auto',
    },

    drawerIcon: {
        color: 'white',
        fontSize: 45,
    },

    drawer: {
        background: theme.palette.common.blue,
    },
    drawerItem: {
        ...theme.typography.tab,
        color: 'white'
    },
    drawerItemEstimate: {
        background: theme.palette.common.orange
    },
    appBar: {
        zIndex: theme.zIndex.modal + 1
    },
    sideDrawerTopMargin: {
        ...theme.mixins.toolbar,
        marginTop: '1rem'
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

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    // const [value, setValue] = useState(0);
    const value = useContext(NavigationContext).value;
    const navigationHandler = useContext(NavigationContext).navChangeHandler;
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleChange = (event, newValue) => {
       navigationHandler(newValue);
    };

    const drawerListItemHandler = (value) => {
        setOpenDrawer(false);
        navigationHandler(value);
    }

    const headerTabs = (
        <HeaderTabs routes={routes} handleChange={handleChange}/>
    )

    const drawer = (
        <Fragment>

            <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuOutlinedIcon className={classes.drawerIcon} />
            </IconButton>

            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                open={openDrawer}
                classes={{paper: classes.drawer}}
            >
                <div className={classes.sideDrawerTopMargin}/>
                <List>
                    {
                        routes.map((listItem, index) => {
                            return (
                                <ListItem
                                    className={index === 5 ? classes.drawerItemEstimate : null}
                                    selected={value === index}
                                    onClick={drawerListItemHandler.bind(this, index)}
                                    divider
                                    button
                                    component={Link} to={listItem.link}>

                                    <ListItemText className={classes.drawerItem}>{listItem.name}</ListItemText>

                                </ListItem>
                            )
                        })
                    }
                </List>
            </SwipeableDrawer>

        </Fragment>
    )

    return (
        <React.Fragment>
            <AppBar className={classes.appBar} position='fixed'>
                <Toolbar disableGutters>
                    <Button disableRipple className={classes.logoContainer} component={Link} to='/'
                            onClick={handleChange}>
                        <img src={logo} alt="Logo" className={classes.logo}/>
                    </Button>
                    {matches ? drawer : headerTabs}
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor"/>
            <div className={classes.toolbarMargin}/>

            {/*from bottom to up icon*/}
            <ScrollTop {...props}>
                <Fab color="pink" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon/>
                </Fab>
            </ScrollTop>

        </React.Fragment>
    );
};

export default Header;
