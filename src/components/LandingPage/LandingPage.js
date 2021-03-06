import React from 'react';
import {makeStyles} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import customSoftwareIcon from '../../assets/CustomSoftwareIcon.svg';
import websiteIcon from '../../assets/websiteIcon.svg';
import mobileIcon from '../../assets/mobileIcon.svg';

import HeroSection from "./HeroSection/HeroSection";
import LeftServicesIntro from "./ServicesIntro/LeftServicesIntro";
import RightServices from "./ServicesIntro/RightServices";
import RevolutionCard from "./RevolutionCard/RevolutionCard";
import InfoBlock from "./InfoSection/InfoBlock";
import CallToAction from "./CallToAction/CallToAction";


const useStyles = makeStyles(theme => {
    return {
        gridMainContainer: {
            marginTop: '2rem',
        },

    }
})

const LandingPage = (props) => {

    const classes = useStyles();


    return (
        <Grid className={classes.gridMainContainer} container direction={"column"}
              style={{width: '100%', height: '100%'}}>
            <Grid item>
                <HeroSection/>
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
            <Grid item>
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
                    mainHeading={"Website Development"}
                    subHeading1={"Reach More. Discover More. Sell More."}
                    subHeading2={"Optimized for Search Engines, built for speed."}
                    image={websiteIcon}
                    alt={"Website Development"}
                    Link={'/websites'}
                    popUpValue={2}
                />
            </Grid>
            <Grid item style={{width: '100%', height: '100%'}}>
                <RevolutionCard/>
            </Grid>
            <Grid item>
                <InfoBlock/>
            </Grid>
            <Grid item>
                <CallToAction/>
            </Grid>
        </Grid>
    );
};

export default LandingPage;
