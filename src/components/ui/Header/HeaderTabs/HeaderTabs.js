import React, {Fragment, useContext, useEffect, useState} from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {Menu} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import {NavigationContext} from "../../../../context/NavigationContext";

const useStyles = makeStyles(theme => ({
    tabContainer: {
        marginLeft: 'auto',
    },
    tab: {
        ...theme.typography.tab,
        marginLeft: '25px'
    },
    button: {
        ...theme.typography.estimate,

        marginRight: '25px',
        marginLeft: '50px',
        fontSize: '1rem',
        height: '45px',
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        }
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: 'white',
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: '.7',
        '&:hover': {
            opacity: '1'
        }
    }
}))

const HeaderTabs = (props) => {

    const classes = useStyles();
    const value = useContext(NavigationContext).value;

    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    // const [selectedIndex, setSelectedIndex] = useState(null);
    const popupIndex = useContext(NavigationContext).popupIndex;
    const popupHandler = useContext(NavigationContext).popupChangeHandler;

    const navigationHandler = useContext(NavigationContext).navChangeHandler;

    const menuItems = [
        {link: '/services', name: 'Services'},
        {link: '/customSoftware', name: 'Custom Software Development'},
        {link: '/mobileApps', name: 'Mobile App Development'},
        {link: '/websites', name: 'Website Development'},
    ]

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpen(true);
    }

    const handleMenuItemClick = (e, i) => {
        handleClose();
        navigationHandler(1);
        popupHandler(i);
    }

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpen(false);
    }

    useEffect(() => {

        const currentPath = window.location.pathname;
        if (currentPath === '/' && value !== 0) {
            navigationHandler(0)
        } else if (currentPath === '/customSoftware' || currentPath === '/services' || currentPath === '/mobileApps' || currentPath === '/websites' && value !== 1) {
            navigationHandler(1)
        } else if (currentPath === '/revolution' && value !== 2) {
            navigationHandler(2)
        } else if (currentPath === '/about' && value !== 3) {
            navigationHandler(3)
        } else if (currentPath === '/contactus' && value !== 4) {
            navigationHandler(4)
        } else if (currentPath === '/estimate' && value !== 5) {
            navigationHandler(5)
        }

        if (value === 1) {
            if (currentPath === '/services') {
                popupHandler(0);
            } else if (currentPath === '/customSoftware') {
                popupHandler(1);
            } else if (currentPath === '/mobileApps') {
                popupHandler(2);
            } else if (currentPath === '/websites') {
                popupHandler(3);
            }
        }

    }, [navigationHandler, popupHandler, value]);

    return (
        <Fragment>
            <Tabs indicatorColor="primary" value={value} onChange={props.handleChange}
                  className={classes.tabContainer}>
                {
                    props.routes.map((tabItem, index) => {
                        if (index !== 5) {
                            return (
                                <Tab
                                    component={Link}
                                    to={tabItem.link}
                                    className={classes.tab}
                                    label={tabItem.name}
                                    aria-controls={index === 1 ? (anchorEl ? 'simple-menu' : null) : null}
                                    aria-haspopup={index === 1 ? (anchorEl ? "true" : null) : null}
                                    onMouseOver={index === 1 ? handleClick : null}
                                />
                            )
                        }
                    })
                }

            </Tabs>
            <Button onClick={() => navigationHandler(null)} component={Link} to='/estimate' variant='contained'
                    color='secondary' className={classes.button}>
                Free Estimate
            </Button>

            {/*Menu for services in header*/}

            <Menu id='simple-menu'
                  anchorEl={anchorEl}
                  open={open}
                  MenuListProps={{onMouseLeave: handleClose}}
                  classes={{paper: classes.menu}}
                  elevation={0}
                  keepMounted
                  style={{zIndex: '9999'}}
            >

                {/* MenuItems Array*/}

                {
                    menuItems.map((menuItem, index) => {
                        return (
                            <MenuItem
                                key={menuItem.name}
                                selected={(value === 1) ? popupIndex === index : false}
                                to={menuItem.link}
                                classes={{root: classes.menuItem}}
                                component={Link}
                                onClick={(e) => handleMenuItemClick(e, index)}>
                                {menuItem.name}
                            </MenuItem>)
                    })
                }
            </Menu>
        </Fragment>
    )

}

export default HeaderTabs;
