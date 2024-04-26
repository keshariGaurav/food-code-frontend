import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProfileWrapper from 'src/layout/AccountWrapper/ProfileWrapper';
import BankAccountWrapper from 'src/layout/AccountWrapper/BankAccountWrapper';
import { Card, Stack, Box, TextField, CircularProgress } from '@mui/material';
import { useApi } from 'src/hooks/useApi';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';

const AccountWrapper = (props) => {
    const [cafeData, setCafeData] = useState([]);
    const { pageState, dispatch } = useFoodCodeContext();

    const { cancel, data, error, loaded } = useApi('http://localhost:3100/api/v1/account', 'get', {});

    useEffect(() => {
        if (loaded) {
            setCafeData(data?.data?.cafe);
            dispatch({
                type: 'update-bank-details',
                payload: {
                    ...data?.data?.cafe?.bankDetails,
                },
            });
            dispatch({
                type: 'update-profile-details',
                payload: {
                    ...data?.data?.cafe,
                },
            });
        }
    }, [data, loaded]);

    if (!loaded) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Stack spacing={4}>
            <ProfileWrapper id={cafeData._id} data={cafeData} />
            <BankAccountWrapper id={cafeData._id} data={cafeData?.bankDetails} />
        </Stack>
    );
};

AccountWrapper.propTypes = {};

export default AccountWrapper;
