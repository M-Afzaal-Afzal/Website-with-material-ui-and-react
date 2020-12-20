import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Avatar, Grid, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import history from '../../assets/history.svg';
import founder from '../../assets/founder.jpg';
import yearBook from '../../assets/yearbook.svg';
import puppy from '../../assets/puppy.svg';
import CallToAction from "../LandingPage/CallToAction/CallToAction";

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
    gridMainContainer: {
        marginTop: '1em',
    },
    aboutText: {
        fontSize: '1.5rem',
        maxWidth: '50em',
        fontWeight: '300',
        lineHeight: 1.4,
        fontStyle: 'italic',
    },
    avatar: {
        width: '25em',
        height: '25em',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '300px',
            maxHeight: '300px'
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '200px',
            maxHeight: '200px'
        },

    },
    aboutImage: {
        maxWidth: '300px',
        [theme.breakpoints.down('xs')]: {
            width: '250px'
        }
    }

}))

const AboutUsPage = () => {

    const classes = useStyles();
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <Grid container className={classes.gridMainContainer}>

            <Grid item container className={classes.GridRowContainer} justify={matchesMd ? 'center' : 'flex-start'}>

                <Grid item>
                    <Typography variant={'h2'}>
                        About Us
                    </Typography>
                </Grid>

            </Grid>

            <Grid item container className={classes.GridRowContainer} style={{marginTop: '3em'}} justify={'center'}>

                <Grid item>
                    <Typography variant={'h4'} align={'center'} className={classes.aboutText}>
                        Whether it be person to person, business to consumer, or an individual to their interests,
                        technology is meant to bring us closer to what we care about in the best way possible. Arc
                        Development will use that principle to provide fast, modern, inexpensive, and aesthetic software
                        to the Midwest and beyond.
                    </Typography>
                </Grid>

            </Grid>

            <Grid item container alignItems={matchesMd ? 'center' : 'auto'}
                  justify={matchesMd ? 'center' : 'space-around'} direction={matchesMd ? 'column' : 'row'}
                  className={classes.GridRowContainer} style={{marginTop: '10em', marginBottom: '10em'}}>
                <Grid item>
                    <Grid item container justify={'center'} alignItems={matchesMd ? 'center' : 'flex-start'}
                          align={matchesMd ? 'center' : 'auto'} direction={'column'} lg style={{maxWidth: '35em'}}>
                        <Typography variant={'h4'} paragraph>
                            History
                        </Typography>
                        <Typography variant={'body2'} style={{fontWeight: 'bold', fontStyle: 'italic'}} paragraph>
                            We're the new kid on the block
                        </Typography>
                        <Typography variant={'body2'} paragraph>
                            Founded in 2019, we’re ready to get our hands on the world’s business problems.
                        </Typography>
                        <Typography variant={'body2'} paragraph>
                            It all started with one question: Why aren’t all businesses using available technology?
                            There
                            are many different answers to that question: economic barriers, social barriers, educational
                            barriers, and sometimes institutional barriers.
                        </Typography>
                        <Typography variant={'body2'} paragraph>
                            We aim to be a powerful force in overcoming these obstacles. Recent developments in software
                            engineering and computing power, compounded by the proliferation of smart phones, has opened
                            up
                            infinite worlds of possibility. Things that have always been done by hand can now be done
                            digitally and automatically, and completely new methods of interaction are created daily.
                            Taking
                            full advantage of these advancements is the name of the game.
                        </Typography>
                        <Typography variant={'body2'} paragraph>
                            All this change can be a lot to keep up with, and that’s where we come in.
                        </Typography>

                    </Grid>
                </Grid>

                <Grid item>
                    <Grid item container justify={'center'} lg>
                        <img src={history} alt="History book"
                             style={{maxHeight: matchesXs ? '150px' : (matchesMd ? '200px' : '22em')}}/>
                    </Grid>
                </Grid>


            </Grid>

            <Grid item container>
                <Grid item container justify={'center'}>
                    <Typography variant={'h4'} gutterBottom>
                        Team
                    </Typography>
                </Grid>
                <Grid item container alignItems={'center'} direction={'column'} style={{textAlign: 'center'}}>
                    <Typography variant={'body2'} paragraph>
                        Zachary Reece, Founder
                    </Typography>
                    <Typography variant={'body2'} paragraph>
                        I started coding when I was 9 years old.
                    </Typography>
                </Grid>

                <Grid item container justify={'center'}>
                    <Avatar alt="Founder" src={founder} className={classes.avatar}/>
                </Grid>

            </Grid>

            <Grid
                item
                container
                justify={'center'}
                alignItems={matchesMd ? 'center' : 'flex-start'}
                direction={matchesMd ? 'column' : 'row'}
                className={classes.GridRowContainer}
                style={{marginBottom: '8em'}}
            >

                <Grid item lg style={{marginBottom: matchesMd ? '2.5em' : '0'}}>
                    <Grid container justify={matchesXs ? 'center': 'auto'}>
                        <img src={yearBook} alt="Year Book" className={classes.aboutImage}/>
                    </Grid>
                    <Grid container justify={'flex-start'}>
                        <Typography variant={'caption'} style={{textAlign: 'center'}}>
                            a page from my Sophomore yearbook
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item lg style={{order: matchesMd ? '-99' : '0'}}>
                    <Grid container justify={'center'}
                          style={{maxWidth: '45em', padding: '1.25em', textAlign: 'center'}}>
                        <Typography variant={'body2'} paragraph>
                            I taught myself basic coding from a library book in third grade, and ever since then my
                            passion has solely been set on learning — learning about computers, learning mathematics and
                            philosophy, studying design, always just learning.
                        </Typography>
                        <Typography variant={'body2'} paragraph>
                            Now I’m ready to apply everything I’ve learned, and to help others with the intuition I have
                            developed. I'm currently teaching a course about building responsive modern user interfaces
                            on Udemy.com as well as beginning work on my first machine learning mobile application.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item lg>
                    <Grid container justify={matchesXs ? 'center': 'flex-end'}>
                        <img src={puppy} alt="Puppy" className={classes.aboutImage}/>
                    </Grid>
                    <Grid container justify={'flex-end'}>
                        <Typography variant={'caption'} gutterBottom style={{textAlign: 'center'}}>
                            my miniature dapple dachshund, Sterling
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>

            <Grid item container>
                <CallToAction/>
            </Grid>

        </Grid>
    );
};

export default AboutUsPage;
