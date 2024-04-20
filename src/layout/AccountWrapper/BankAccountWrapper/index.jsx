import { Box, Typography, Stack, IconButton } from '@mui/material';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const BankAccountWrapper = (props) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const handleEditClick = () => {
        navigate('/bank-details');
    };

    return (
        <Box sx={{ border: `1px solid ${theme.palette.primary.main}`, backgroundColor: 'white', padding: '12px' }}>
            <Stack gap={1}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h1">Bank Account Details</Typography>
                    <IconButton aria-label="edit" size="large" onClick={handleEditClick}>
                        <EditIcon />
                    </IconButton>
                </Box>
                <Typography variant="h3">Cafe</Typography>
                <Stack direction="row" gap={2}>
                    <Typography variant="h2">Gaurav /</Typography>
                    <Typography variant="h2">8423561111 /</Typography>
                    <Typography variant="h2">gkeshari@gmail.com</Typography>
                </Stack>
                <Typography variant="h3">Address</Typography>
            </Stack>
        </Box>
    );
};

BankAccountWrapper.propTypes = {};

export default BankAccountWrapper;
