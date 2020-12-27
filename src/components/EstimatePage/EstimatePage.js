import {Button, Grid, IconButton, useMediaQuery, useTheme} from "@material-ui/core";
import Lottie from 'react-lottie';
import {makeStyles} from "@material-ui/styles";
import animationData from '../../animations/estimateAnimation/data'
import Typography from "@material-ui/core/Typography/Typography";
import software from '../../assets/software.svg';
import mobile from '../../assets/mobileIcon.svg';
import website from '../../assets/websiteIcon.svg';
import iphone from '../../assets/iphone.svg';
import android from '../../assets/android.svg';
import camera from '../../assets/camera.svg';
import gps from '../../assets/gps.svg';
import upload from '../../assets/upload.svg';
import users from '../../assets/users.svg';
import biometrics from '../../assets/biometrics.svg';
import bell from '../../assets/bell.svg';
import info from '../../assets/info.svg';
import customized from '../../assets/customized.svg';
import person from '../../assets/person.svg';
import persons from '../../assets/persons.svg';
import people from '../../assets/people.svg';
import data from '../../assets/data.svg';
import globe from '../../assets/globe.svg';
import {cloneDeep} from 'lodash';
import React, {useState} from 'react';
import {ArrowBack, ArrowForward} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.secondary.main,
        width: 225,
        height: 50,
        marginTop: '4em',
        fontSize: '1.25rem',
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
        }
    },
    margin: {
        marginLeft: '2em',
        marginTop: '1em',
        [theme.breakpoints.down('md')]: {
            marginLeft: '0'
        }

    },
    serviceQuestion: {
        fontWeight: 500,
        marginTop: '5em',
        fontSize: '2.25rem',
        [theme.breakpoints.down('xs')]: {
            marginTop: '1em',
            padding: '.3em'
        }
    },
    animation: {
        marginRight: '10em',
        maxWidth: '50em',
        marginTop: '7.5em',
        [theme.breakpoints.down('md')]: {
            marginRight: '0'
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '2em'
        }
    },
    floatingIcons: {
        width: '10em',
        height: '10em',
    },
    featuresContainer: {
        paddingRight: '2em',
        marginBottom: '25em',
        marginTop: '2.5em',
        [theme.breakpoints.down('md')]: {
            paddingRight: '0',
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '10em'
        }
    },
    featureContainer: {
        // maxWidth: '200px',
        display: "grid",
        textTransform: 'none',
        borderRadius: '0',
    },
    mgTandB: {
        marginTop: '2em',
        marginBottom: '2em',
    },
    arrowContainer: {
        width: '33em',
        marginTop: '3em',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },
    subTitle: {
        marginBottom: '2.5em',
    }
}))

const EstimatePage = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    const defaultQuestions = [
        {
            id: 1,
            title: 'Which service are you interested in?',
            active: true,
            options: [
                {
                    id: 1,
                    title: 'Custom Software Development',
                    subtitle: null,
                    icon: software,
                    iconAlt: 'three floating screens',
                    selected: false,
                    cost: 0,
                },
                {
                    id: 2,
                    title: 'iOS/Android App Development',
                    subtitle: null,
                    icon: mobile,
                    iconAlt: 'Mobile',
                    selected: false,
                    cost: 0,
                },
                {
                    id: 3,
                    title: 'Website Development',
                    subtitle: null,
                    icon: website,
                    iconAlt: 'Web Screen',
                    selected: false,
                    cost: 0,
                }
            ]
        },

    ]

    const softwareQuestions = [
        {...defaultQuestions[0], active: false},
        {
            id: 2,
            title: "Which platforms do you need supported?",
            subtitle: "Select all that apply.",
            options: [
                {
                    id: 1,
                    title: "Web Application",
                    subtitle: null,
                    icon: website,
                    iconAlt: "computer outline",
                    selected: false,
                    cost: 100
                },
                {
                    id: 2,
                    title: "iOS Application",
                    subtitle: null,
                    icon: iphone,
                    iconAlt: "outline of iphone",
                    selected: false,
                    cost: 100
                },
                {
                    id: 3,
                    title: "Android Application",
                    subtitle: null,
                    icon: android,
                    iconAlt: "outlines of android phone",
                    selected: false,
                    cost: 100
                }
            ],
            active: true
        },
        {
            id: 3,
            title: "Which features do you expect to use?",
            subtitle: "Select all that apply.",
            options: [
                {
                    id: 1,
                    title: "Photo/Video",
                    subtitle: null,
                    icon: camera,
                    iconAlt: "camera outline",
                    selected: false,
                    cost: 25
                },
                {
                    id: 2,
                    title: "GPS",
                    subtitle: null,
                    icon: gps,
                    iconAlt: "gps pin",
                    selected: false,
                    cost: 25
                },
                {
                    id: 3,
                    title: "File Transfer",
                    subtitle: null,
                    icon: upload,
                    iconAlt: "outline of cloud with arrow pointing up",
                    selected: false,
                    cost: 25
                }
            ],
            active: false
        },
        {
            id: 4,
            title: "Which features do you expect to use?",
            subtitle: "Select all that apply.",
            options: [
                {
                    id: 1,
                    title: "Users/Authentication",
                    subtitle: null,
                    icon: users,
                    iconAlt: "outline of a person with a plus sign",
                    selected: false,
                    cost: 25
                },
                {
                    id: 2,
                    title: "Biometrics",
                    subtitle: null,
                    icon: biometrics,
                    iconAlt: "fingerprint",
                    selected: false,
                    cost: 25
                },
                {
                    id: 3,
                    title: "Push Notifications",
                    subtitle: null,
                    icon: bell,
                    iconAlt: "outline of a bell",
                    selected: false,
                    cost: 25
                }
            ],
            active: false
        },
        {
            id: 5,
            title: "What type of custom features do you expect to need?",
            subtitle: "Select one.",
            options: [
                {
                    id: 1,
                    title: "Low Complexity",
                    subtitle: "(Informational)",
                    icon: info,
                    iconAlt: "'i' inside a circle",
                    selected: false,
                    cost: 25
                },
                {
                    id: 2,
                    title: "Medium Complexity",
                    subtitle: "(Interactive, Customizable, Realtime)",
                    icon: customized,
                    iconAlt: "two toggle switches",
                    selected: false,
                    cost: 50
                },
                {
                    id: 3,
                    title: "High Complexity",
                    subtitle: "(Data Modeling and Computation)",
                    icon: data,
                    iconAlt: "outline of line graph",
                    selected: false,
                    cost: 100
                }
            ],
            active: false
        },
        {
            id: 6,
            title: "How many users do you expect?",
            subtitle: "Select one.",
            options: [
                {
                    id: 1,
                    title: "0-10",
                    subtitle: null,
                    icon: person,
                    iconAlt: "person outline",
                    selected: false,
                    cost: 1
                },
                {
                    id: 2,
                    title: "10-100",
                    subtitle: null,
                    icon: persons,
                    iconAlt: "outline of two people",
                    selected: false,
                    cost: 1.25
                },
                {
                    id: 3,
                    title: "100+",
                    subtitle: null,
                    icon: people,
                    iconAlt: "outline of three people",
                    selected: false,
                    cost: 1.5
                }
            ],
            active: false
        }
    ];


    const websiteQuestions = [
        {...defaultQuestions[0], active: false},
        {
            id: 2,
            title: "Which type of website are you wanting?",
            subtitle: "Select one.",
            options: [
                {
                    id: 1,
                    title: "Basic",
                    subtitle: "(Informational)",
                    icon: info,
                    iconAlt: "person outline",
                    selected: false,
                    cost: 100
                },
                {
                    id: 2,
                    title: "Interactive",
                    subtitle: "(Users, API's, Messaging)",
                    icon: customized,
                    iconAlt: "outline of two people",
                    selected: false,
                    cost: 200
                },
                {
                    id: 3,
                    title: "E-Commerce",
                    subtitle: "(Sales)",
                    icon: globe,
                    iconAlt: "outline of three people",
                    selected: false,
                    cost: 250
                }
            ],
            active: true
        }
    ];


    const classes = useStyles();

    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'))
    const matchesMd = useMediaQuery(theme.breakpoints.down('md'))


    const [questions, setQuestions] = useState(defaultQuestions);

    const nextQuestion = () => {
        const newQuestion = cloneDeep(questions);
        // const activeQuestion = newQuestion.filter(question => question.active);
        const activeIndex = newQuestion.findIndex(question => question.active)
        const nextActiveIndex = activeIndex + 1;

        newQuestion[activeIndex] = {...newQuestion[activeIndex], active: false};
        newQuestion[nextActiveIndex] = {...newQuestion[nextActiveIndex], active: true};

        setQuestions(newQuestion);
    }

    const prevQuestion = () => {
        const newQuestion = cloneDeep(questions);
        // const activeQuestion = newQuestion.filter(question => question.active);
        const activeIndex = newQuestion.findIndex(question => question.active)
        const nextActiveIndex = activeIndex - 1;

        newQuestion[activeIndex] = {...newQuestion[activeIndex], active: false};
        newQuestion[nextActiveIndex] = {...newQuestion[nextActiveIndex], active: true};

        setQuestions(newQuestion)
    }

    const handleSelect = (id) => {
        const newQuestions = cloneDeep(questions);
        const activeIndex = newQuestions.findIndex(question => question.active);

        switch (newQuestions[activeIndex].subtitle) {
            case 'Select one.':
                if (newQuestions[activeIndex].options.filter(option => option.selected)[0]) {
                    const prevSelectedOption = newQuestions[activeIndex].options.filter(option => option.selected)[0];
                    prevSelectedOption.selected = !prevSelectedOption.selected;
                }
                newQuestions[activeIndex].options[id - 1].selected = !newQuestions[activeIndex].options[id - 1].selected;
                break;
            default:
                newQuestions[activeIndex].options[id - 1].selected = !newQuestions[activeIndex].options[id - 1].selected;
                break;
        }

        switch (newQuestions[activeIndex].options[id -1].title) {
            case "Custom Software Development":
                setQuestions(softwareQuestions);
                break;
            case "iOS/Android App Development":
                setQuestions(softwareQuestions);
                break;
            case "Website Development":
                setQuestions(websiteQuestions);
                break;
            default:
                setQuestions(newQuestions);
                break;
        }
    }

    return (
        <Grid container>

            <Grid item container direction={'column'} lg alignItems={matchesMd ? 'center' : 'flex-start'}>
                <Grid item>
                    <Typography variant={'h2'} className={classes.margin}>
                        Estimate
                    </Typography>
                </Grid>
                <Grid item className={classes.animation}>
                    <Lottie height={'100%'} width={'100%'} options={defaultOptions}/>
                </Grid>
            </Grid>

            <Grid item container direction={'column'} lg alignItems={'center'} className={classes.featuresContainer}>
                {
                    questions.filter(question => question.active).map((question) => {
                        return (
                            <React.Fragment key={question.title}>
                                <Grid item>
                                    <Typography variant={'h2'} align={'center'} className={classes.serviceQuestion}
                                                gutterBottom>
                                        {question.title}
                                    </Typography>
                                    <Typography variant={'body2'} align={'center'} gutterBottom
                                                className={classes.subTitle}>
                                        {question.subtitle}
                                    </Typography>
                                </Grid>
                                <Grid item container direction={matchesSm ? 'column' : 'row'}
                                      justify={'space-around'}
                                      alignItems={'stretch'}
                                      align={'center'}>
                                    {
                                        question.options.map((option, index) => {
                                            return (
                                                <Grid item container component={Button}
                                                      onClick={() => handleSelect(option.id)}
                                                      style={{backgroundColor: option.selected ? 'orange' : 'white',}}
                                                      key={option.title} sm justify={'center'}
                                                      direction={'column'}
                                                      className={`${classes.featureContainer} ${(index === 1 && matchesSm) ? classes.mgTandB : null}`}>
                                                    <Grid item>
                                                        <Typography variant={'h6'} gutterBottom>
                                                            {option.title}
                                                        </Typography>
                                                        <Typography variant={'caption'} align={'center'} gutterBottom>
                                                            {option.subtitle}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <img src={option.icon} className={classes.floatingIcons}
                                                             alt={option.iconAlt}/>
                                                    </Grid>
                                                </Grid>
                                            )
                                        })
                                    }

                                </Grid>
                            </React.Fragment>
                        )
                    })
                }
                <Grid item container justify={'space-around'} className={classes.arrowContainer}>
                    <Grid item>
                        <IconButton onClick={prevQuestion} color={'primary'}
                                    disabled={questions.filter(question => question.active)[0].id === 1}>
                            {/*<img src={backArrow} alt="Back Arrow"/>*/}
                            <ArrowBack/>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={nextQuestion} color={'primary'}
                                    disabled={questions.filter(question => question.active)[0].id === questions.length}>
                            {/*<img src={forwardArrow} alt="Forward Arrow"/>*/}
                            <ArrowForward/>
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button className={classes.estimateButton}>Get Estimate</Button>
                </Grid>
            </Grid>

        </Grid>
    );
};

export default EstimatePage;
