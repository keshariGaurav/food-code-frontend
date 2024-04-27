import React from 'react';
import PropTypes from 'prop-types';
import AccountWrapper from 'src/layout/AccountWrapper';
import GridLayout from 'src/layout/GridLayout';
import { Grid } from '@mui/material';
const Account = (props) => {
    return (
        <GridLayout>
            <AccountWrapper />
        </GridLayout>
    );
};

Account.propTypes = {};

export default Account;
