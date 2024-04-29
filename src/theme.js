import { grey, blue , green, common} from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Button } from '@mui/material';

export let appTheme = createTheme({
    typography: {
        fontFamily: ['Nunito Sans', 'sans-serif'].join(','),
    },
    palette: {
        primary: {
            main: '#FEA1A1',
        },
        secondary: {
            main: '#ECCDB4',
        },
        warning: {
            main: '#F0EDD4',
        },
        info: {
            main: '#F9FBE7',
        },
        common : {
            white: common.white,
        },
        green : {
            100: green[100],
            200: green[200],
            300: green[300],
            400: green[400],
            500: green[500],
            600: green[600],
            700: green[700],
            800: green[800],
            900: green[900],
        },
        grey: {
            100: grey[100],
            200: grey[200],
            300: grey[300],
            400: grey[400],
            500: grey[500],
            600: grey[600],
            700: grey[700],
            800: grey[800],
            900: grey[900],
        },
        blue: {
            100: blue[100],
            200: blue[200],
            300: blue[300],
            400: blue[400],
            500: blue[500],
            600: blue[600],
            700: blue[700],
            800: blue[800],
            900: blue[900],

        }
    },
});

appTheme = createTheme(appTheme, {
    typography: {
        h1: {
            fontSize: '2.4rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '2.0rem',
            fontWeight: 500,
        },
        h3: {
            fontSize: '1.8rem',
            fontWeight: 400,
        },
        h3: {
            fontSize: '1.6rem',
            fontWeight: 400,
        },
        h4: {
            fontSize: '1.4rem',
            fontWeight: 200,
        },
        h5: {
            fontSize: '1.2rem',
            fontWeight: 400,
        },
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'backButton' },
                    style: {
                        color: grey[800],
                        padding: '0px',
                        '&:hover': {
                            cursor: 'pointer',
                            backgroundColor: 'transparent',
                        },
                    },
                },
                {
                    props: { variant: 'newAddon' },
                    style: {
                        border: `1px dotted ${grey[300]}`,
                        color: grey[700],
                        '&:hover': {
                            cursor: 'pointer',
                        },
                    },
                },
                {
                    props: { variant: 'save' },
                    style: {
                        color: appTheme.palette.secondary.contrastText,
                        backgroundColor: appTheme.palette.secondary.main,
                        '&:hover': {
                            cursor: 'pointer',
                            backgroundColor: appTheme.palette.secondary.dark,
                        },
                    },
                },
                {
                    props: { variant: 'cancel' },
                    style: {
                        color: appTheme.palette.grey['900'],
                        backgroundColor: appTheme.palette.grey['300'],
                        '&:hover': {
                            cursor: 'pointer',
                            backgroundColor: appTheme.palette.grey['200'],
                        },
                    },
                },
                {
                    props: { variant: 'success' },
                    style: {
                        color: appTheme.palette.primary.contrastText,
                        backgroundColor: appTheme.palette.primary.main,
                        '&:hover': {
                            cursor: 'pointer',
                            backgroundColor: appTheme.palette.primary.dark,
                        },
                    },
                },
                
            ],
        },
    },
});
