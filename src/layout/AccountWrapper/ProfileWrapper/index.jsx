import { Box, Typography, Stack, IconButton } from '@mui/material';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const ProfileWrapper = (props) => {
    const theme = useTheme();
    const data = props.data;
    const id = props.id;
    const navigate = useNavigate();
    const handleEditClick = () => {
        navigate(`/profile-details/${id}`);
    };

    return (
        <Box sx={{ border: `2px solid ${theme.palette.grey['300']}`, backgroundColor: 'white', padding: '12px' }}>
            <Stack gap={1}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h1">Profile</Typography>
                    <IconButton aria-label="edit" size="large" onClick={handleEditClick}>
                        <EditIcon />
                    </IconButton>
                </Box>
                <Typography variant="h3">{data.cafeName}</Typography>
                <Stack direction="row" gap={2}>
                    <Typography variant="h2">{data.ownerName} /</Typography>
                    <Typography variant="h2">{data.contactNumber} /</Typography>
                    <Typography variant="h2">{data.email}</Typography>
                </Stack>
                <Typography variant="h3">Address</Typography>
            </Stack>
        </Box>
    );
};

ProfileWrapper.propTypes = {};

export default ProfileWrapper;
