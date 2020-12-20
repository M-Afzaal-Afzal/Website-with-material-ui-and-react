import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const arcGrey = '#868686'

const theme = createMuiTheme({
    palette: {
        common: {
            blue: arcBlue,
            orange: arcOrange
        },
        primary: {
            main: arcBlue
        },
        secondary: {
            main: arcOrange
        }
    },
    typography: {
        tab: {
            fontFamily: 'Raleway',
            textTransform: 'none',
            fontWeight: '700',
            fontSize: '1rem',
            minWidth: 10,
        },
        estimate: {
            borderRadius: '50px',
            fontFamily: 'pacifico',
            textTransform: 'none',
            color: 'white',

        },
        h1: {
            fontFamily: 'Pacifico',
            color: arcBlue,
            fontSize: '2.5rem',
            fontWeight: '700',
        },
        h2: {
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: '2.5rem',
            color: arcBlue,
            lineHeight: 1.5,
        },
        h3: {
            color: arcBlue,
            fontSize: '2.5rem',
            fontFamily: 'Pacifico',
            fontWeight: 400,
            lineHeight: 1.2,

        },
        h4: {
            fontSize: '1.75rem',
            lineHeight: '1.25',
            fontWeight: '700',
            fontFamily: 'Raleway',
            color: arcBlue,
        },
        subtitle1: {
            color: arcGrey,
            fontSize: '1.25rem',
            fontFamily: 'Roboto',
            fontWeight: 300,
            lineHeight: 1.75,
        },
        learntButtonHero: {
            borderColor: arcBlue,
            borderWidth: 2,
            borderRadius: 50,
            textTransform: 'none',
            fontFamily: 'Roboto',
            fontWeight: 700,

            "&:hover": {
                borderWidth: 2,
            }
        },
        subtitle2: {
            color: "white",
            fontSize: '1.25rem',
            fontFamily: 'Roboto',
            fontWeight: 300,
            lineHeight: 1.5,
        },
        body1: {
            fontSize: '1.25rem',
            fontWeight: 300,
            fontFamily: 'Roboto',
            lineHeight: 1.5,
            color: "white",
        },
        body2: {
            fontSize: '1.25rem',
            fontWeight: 300,
            fontFamily: 'Roboto',
            lineHeight: 1.5,
            color: arcGrey
        },
        caption: {
            color: arcGrey,
            fontSize: '1rem',
            fontWeight: 300,
            lineHeight: 1.5,
        }
    }
});

export default theme;
