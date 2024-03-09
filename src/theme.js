import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Button } from '@mui/material';

export let appTheme = createTheme({
    palette: {
        primary: {
            main: '#95CD41',
        },
        secondary: {
            main: '#EA5C2B',
        },
        warning: {
            main: '#FF7F3F',
        },
        info: {
            main: '#F6D860',
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
    },
});

appTheme = createTheme(appTheme, {
    typography: {
        fontFamily: '"Nunito Sans", sans-serif',
        htmlFontSize: 10,
        h1: {
            fontSize: '2.4rem',
            fontWeight: 700,
        },
        h2: {
            fontSize: '2.0rem',
            fontWeight: 600,
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
            fontWeight: 400,
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
                        border: '1px dotted gray',
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
            ],
        },
    },
});
