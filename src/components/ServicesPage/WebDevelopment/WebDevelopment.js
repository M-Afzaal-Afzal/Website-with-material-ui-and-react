import React from 'react';
import ServicesIntro from "../ServicesIntro";
import {makeStyles} from "@material-ui/styles";
import ecommerce from '../../../assets/ecommerce.svg';
import analytics from '../../../assets/analytics.svg';
import seo from '../../../assets/seo.svg';
import outreach from '../../../assets/outreach.svg';
import WebDevFeature from "./WebDevFeature/WebDevFeature";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    GridRowContainer: {
        paddingLeft: '5em',
        paddingRight: '5em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '2.5em',
            paddingRight: '2.5em',
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '1em',
            paddingRight: '1em',
        }
    },
    mainGridContainer: {
        paddingTop: '2em',
        paddingBottom: '10em',

        [theme.breakpoints.down('sm')]: {
            paddingTop: '1em',
            paddingBottom: '5em',
        },
        [theme.breakpoints.down('xs')]: {
            paddingTop: '0',
            paddingBottom: '3em',
        }
    },
    analytics: {
        marginTop: '10em'
    },
    ecommerce: {
        marginTop: '10em',
        marginBottom: '10em',
    },
    marginBottom: {
        marginBottom: '10rem',
    }
}))

const WebDevelopment = () => {
    const classes = useStyles();
    return (

            <Grid container direction={'column'} className={classes.mainGridContainer}>
                <Grid style={{width: '100%'}} item className={classes.GridRowContainer}>
                    <ServicesIntro
                        heading='Website Development'
                        paragraph1='Having a website is a necessity in today’s business world. They give you one central, public location to let people know who you are, what you do, and why you’re the best at it.'
                        paragraph2='From simply having your hours posted to having a full fledged online store, making yourself as accessible as possible to users online drives growth and enables you to reach new customers.'
                    />
                </Grid>
                <Grid item className={`${classes.GridRowContainer} ${classes.analytics}`}>
                    <WebDevFeature
                        p1={` Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden
                    patterns and trends in your business, empowering you to make smarter decisions with
                    measurable
                    effects.`}
                        heading={'Analytics'} image={analytics}/>
                </Grid>
                <Grid item className={`${classes.GridRowContainer} ${classes.ecommerce}`}>
                    <WebDevFeature
                        p1={`It’s no secret that people like to shop online.`}
                        p2={`In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie.`}
                        heading={'E-Commerce'}
                        image={ecommerce}
                        left={'auto'}/>
                </Grid>
                <Grid item className={`${classes.GridRowContainer} ${classes.marginBottom}`}>
                    <WebDevFeature
                        p1={`Draw people in with a dazzling website. Showing off your products online is a great way to help customers decide what’s right for them before visiting in person.`}
                        heading={'Outreach'}
                        image={outreach}
                    />
                </Grid>
                <Grid item className={`${classes.GridRowContainer} ${classes.marginBottom}`} >
                    <WebDevFeature
                        p1={`How often have you ever been to the second page of Google results?`}
                        p2={`If you’re like us, probably never.`}
                        p3={`Customers don’t go there either, so we make sure your website is designed to end up on top.`}
                        heading={`Search Engine Optimization`}
                        image={seo}
                        left={'auto'}
                    />
                </Grid>
            </Grid>

    );
};

export default WebDevelopment;
