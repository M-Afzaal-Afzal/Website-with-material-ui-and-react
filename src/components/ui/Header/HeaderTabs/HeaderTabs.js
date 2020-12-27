import React, {Fragment, useCallback, useEffect, useState} from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {Menu} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import {withRouter} from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import * as actions from '../../../../store/actions/index.actions'
import {navManager} from "../utility/utility";

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

    const dispatch = useDispatch();
    const classes = useStyles();
    const value = useSelector(state => {
        return state.navigation.value;
    });

    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const popupIndex = useSelector(state => state.navigation.popupIndex);
    const popupHandler = useCallback((val) => dispatch(actions.popupHandler(val)),[dispatch]) ;

    const navigationHandler = useCallback((pIndex) => dispatch(actions.navHandler(pIndex)),[dispatch]);

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
    const currentPath = props.location.pathname;

    useEffect(() => {
        // console.log(props)
        navManager(currentPath,value,navigationHandler,popupHandler);
        window.scrollTo(0, 0)
    }, [value, currentPath]);

    return (
        <Fragment>
            <Tabs indicatorColor="primary" value={value} onChange={props.handleChange}
                  className={classes.tabContainer}>
                {
                    props.routes.map((tabItem, index) => {
                        if (index !== 5) {
                            return (
                                <Tab
                                    component={NavLink}
                                    to={tabItem.link}
                                    className={classes.tab}
                                    label={tabItem.name}
                                    aria-controls={index === 1 ? (anchorEl ? 'simple-menu' : null) : null}
                                    aria-haspopup={index === 1 ? (anchorEl ? "true" : null) : null}
                                    onMouseOver={index === 1 ? handleClick : null}
                                    key={index}
                                />
                            )
                        } else {
                            return null;
                        }
                    })
                }

            </Tabs>
            <Button onClick={() => navigationHandler(null)} component={NavLink} to='/estimate' variant='contained'
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
                                component={NavLink}
                                style={{color: 'white'}}
                                onClick={(e) => handleMenuItemClick(e, index)}>
                                {menuItem.name}
                            </MenuItem>)
                    })
                }
            </Menu>
        </Fragment>
    )

}

export default withRouter(HeaderTabs);
