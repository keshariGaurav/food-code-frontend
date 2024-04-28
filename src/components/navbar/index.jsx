import React, { useRef, useEffect } from 'react';
import { AppBar, Toolbar, CssBaseline, Typography, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context.jsx';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: `${theme.palette.primary.contrastText}`,
    fontSize: '20px',
    marginRight: theme.spacing(6),
    '&:hover': {
        borderBottom: `1px solid ${theme.palette.primary.dark}`,
    },
}));

const Navbar = (props) => {
    const theme = useTheme();
    const location = useLocation();
    const componentRef = useRef(null);
    const { pageState, dispatch } = useFoodCodeContext();

    useEffect(() => {
        if (componentRef?.current) {
            const height = componentRef.current.getBoundingClientRect().height;
            dispatch({
                type: 'update-root',
                payload: {
                    navbarHeight: height,
                },
            });
        }
    }, []);

    const auth = props.auth;
    let routes = [
        {
            name: 'Orders',
            url: '/order',
        },
        {
            name: 'Menu',
            url: '/',
        },
        ,
        {
            name: 'Account',
            url: '/account',
        },
    ];
    if (!auth) {
        if (location.pathname === 'login') {
            routes = [
                {
                    name: 'Login',
                    url: '/login',
                },
            ];
        } else {
            routes = [
                {
                    name: 'Forgot Password',
                    url: 'forgot-password',
                },
            ];
        }
    }

    return (
        <AppBar position="fixed" ref={componentRef}>
            <CssBaseline />
            <Toolbar>
                <Typography
                    color={theme.palette.primary.contrastText}
                    variant="h1"
                    sx={{
                        flexGrow: 1,
                        cursor: 'pointer',
                    }}
                >
                    BaniyaByte Café
                </Typography>
                <Box
                    sx={{
                        marginLeft: 10,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    {routes.map((route, idx) => {
                        return (
                            <StyledLink key={idx} to={route.url} theme={theme}>
                                <Typography variant="h2">{route.name}</Typography>
                            </StyledLink>
                        );
                    })}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
