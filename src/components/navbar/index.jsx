import React from 'react';
import { AppBar, Toolbar, CssBaseline, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: 'black',
    fontSize: '20px',
    marginLeft: theme.spacing(2),
    '&:hover': {
        color: 'black',
        borderBottom: '1px solid white',
    },
}));

const Navbar = () => {
    return (
        <AppBar position="fixed">
            <CssBaseline />
            <Toolbar>
                <Typography
                    variant="h1"
                    sx={{
                        flexGrow: 1,
                        cursor: 'pointer',
                    }}
                >
                    AG
                </Typography>
                <Box
                    sx={{
                        marginLeft: 10,
                        display: 'flex',
                    }}
                >
                    <StyledLink to="/orders">Orders</StyledLink>
                    <StyledLink to="/" sx={{ fontSize: '20px' }}>
                        Menu
                    </StyledLink>
                    <StyledLink to="/account" sx={{ fontSize: '20px' }}>
                        Account
                    </StyledLink>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
