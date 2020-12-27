import React, {Fragment, useEffect, useState} from 'react';
import IconButton from "@material-ui/core/IconButton";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import {useSelector, useDispatch} from "react-redux";
import * as actions from "../../../../store/actions/index.actions";
import {makeStyles} from "@material-ui/core/styles";
import {withRouter} from 'react-router-dom';
import {navManager} from "../utility/utility";


const useStyles = makeStyles((theme) => ({

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
        color: 'white',
        fontSize: '1rem'
    },
    drawerItemEstimate: {
        background: theme.palette.common.orange
    },
    sideDrawerTopMargin: {
        ...theme.mixins.toolbar,
        marginTop: '1rem'
    }

}));


const Drawer = (props) => {

    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);

    const value = useSelector(state => {
        return state.navigation.value;
    });
    const dispatch = useDispatch();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const navigationHandler = (val) => dispatch(actions.navHandler(val));

    const popupHandler =(pIndex) => dispatch(actions.popupHandler(pIndex))

    const drawerListItemHandler = (value) => {
        setOpenDrawer(false);
        navigationHandler(value);
    }


    const currentPath = props.location.pathname;

    useEffect(() => {
        navManager(currentPath,value,navigationHandler,popupHandler);
        window.scrollTo(0, 0)
    }, [currentPath])

    return (
        (
            <Fragment>

                <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)}>
                    <MenuOutlinedIcon className={classes.drawerIcon}/>
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
                            props.routes.map((listItem, index) => {
                                return (
                                    <ListItem
                                        className={index === 5 ? classes.drawerItemEstimate : null}
                                        selected={value === index}
                                        onClick={drawerListItemHandler.bind(this, index)}
                                        divider
                                        button
                                        component={Link} to={listItem.link}
                                        key={index}
                                    >

                                        <ListItemText className={classes.drawerItem}>{listItem.name}</ListItemText>

                                    </ListItem>
                                )
                            })
                        }
                    </List>
                </SwipeableDrawer>

            </Fragment>
        )
    );
};

export default withRouter(Drawer);
