import { Box, Typography, Stack, IconButton, Button } from '@mui/material';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const RestaurantWrapper = (props) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const handleEditClick = () => {
        navigate(`/resturant-info`);
    };

    return (
        <Box sx={{ border: `2px solid ${theme.palette.grey['300']}`, backgroundColor: 'white', padding: '12px' }}>
            <Stack gap={1}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h1">Restaurant Info</Typography>
                </Box>
                <Stack direction="column" alignItems="flex-start" gap={2}>
                    <Stack>
                        <Typography variant="h3">32</Typography>
                        <Typography variant="h3">Tables</Typography>
                    </Stack>
                    <Button variant="success" sx={{ width: 'auto' }} onClick={handleEditClick}>
                        Manage
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
};

RestaurantWrapper.propTypes = {};

export default RestaurantWrapper;
