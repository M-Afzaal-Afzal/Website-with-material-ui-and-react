import React from 'react';
import LeftServicesIntro from "../LandingPage/ServicesIntro/LeftServicesIntro";
import RightServices from "../LandingPage/ServicesIntro/RightServices";
import Grid from "@material-ui/core/Grid";
import customSoftwareIcon from "../../assets/CustomSoftwareIcon.svg";
import mobileIcon from "../../assets/mobileIcon.svg";
import Typography from "@material-ui/core/Typography/Typography";
import {makeStyles} from "@material-ui/styles";
import websiteIcon from "../../assets/websiteIcon.svg";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => {
    return {
        margin: {
            marginLeft: '2em',
            marginTop: '1em'

        },
        marginBottom: {
            marginBottom: '10em'
        }
    }
})

const ServicesPage = () => {
    const classes = useStyles();
    return (
        <Container maxWidth='lg'>
            <Grid container direction={"column"}>
                <Grid item>
                    <Typography variant={'h2'} className={classes.margin}>
                        Services
                    </Typography>
                </Grid>
                <Grid item style={{marginTop: '-8em'}}>
                    <RightServices
                        mainHeading={"iOS/Android App Development"}
                        subHeading1={"Extend Functionality. Extend Access. Increase Engagement."}
                        subHeading2beforeBreak={`Integrate your web experience or create a standalone app`}
                        subHeading2afterBreak={`with either mobile platform.`}
                        image={mobileIcon}
                        alt={"App Development"}
                        Link={'/mobileApps'}
                        popUpValue={1}
                    />
                </Grid>
                <Grid item>
                    <LeftServicesIntro
                        mainHeading={"Custom Software Development"}
                        subHeading1={"Save Energy. Save Time. Save Money."}
                        subHeading2={"Complete digital solutions, from investigation to celebration."}
                        image={customSoftwareIcon}
                        alt={"Custom Software"}
                        Link={'/customSoftware'}
                        popUpValue={0}

                    />
                </Grid>
                <Grid item className={classes.marginBottom}>
                    <RightServices
                        mainHeading={"Website Development"}
                        subHeading1={"Reach More. Discover More. Sell More."}
                        subHeading2beforeBreak={"Optimized for Search Engines, built for speed."}
                        image={websiteIcon}
                        alt={"Website Development"}
                        Link={'/websites'}
                        popUpValue={2}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default ServicesPage;
