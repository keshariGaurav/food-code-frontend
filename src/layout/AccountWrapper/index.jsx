import React from 'react';
import PropTypes from 'prop-types';
import ProfileWrapper from 'src/layout/AccountWrapper/ProfileWrapper';
import BankAccountWrapper from 'src/layout/AccountWrapper/BankAccountWrapper';
import { Card, Stack, Box, TextField, IconButton, InputAdornment, Link, Grid, FormControlLabel, Checkbox } from '@mui/material';

const AccountWrapper = (props) => {
    return (
        <Stack spacing={4}>
            <ProfileWrapper />
            <BankAccountWrapper />
        </Stack>
    );
};

AccountWrapper.propTypes = {};

export default AccountWrapper;
