import React from 'react';
import { AppBar, Toolbar, CssBaseline, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
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

const Navbar = () => {
    const theme = useTheme();

    return (
        <AppBar position="fixed">
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
                    AG
                </Typography>
                <Box
                    sx={{
                        marginLeft: 10,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <StyledLink to="/orders" theme={theme}>
                        <Typography variant="h2">Orders</Typography>
                    </StyledLink>
                    <StyledLink to="/" theme={theme} sx={{ fontSize: '20px' }}>
                        <Typography variant="h2">Menu</Typography>
                    </StyledLink>
                    <StyledLink to="/account" theme={theme} sx={{ fontSize: '20px' }}>
                        <Typography variant="h2">Account</Typography>
                    </StyledLink>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
