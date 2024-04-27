import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Card, Stack, Box, TextField, Typography, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import AlertBar from 'src/components/alertBar';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';
import GridLayout from 'src/layout/GridLayout';

const ForgotPassword = (props) => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const { pageState, dispatch } = useFoodCodeContext();
    const [disabled, setDisabled] = useState(false);

    const handleSubmit = async () => {
        setDisabled(true);
        try {
            const response = await axios.post('http://localhost:3100/api/v1/cafe/forgotPassword', {
                email,
            });
            const message = response?.data?.message;
            dispatch({
                type: 'create-alert',
                payload: {
                    active: true,
                    type: 'success',
                    message,
                },
            });
            dispatch({
                type: 'update-root',
                payload: {
                    email,
                },
            });
            setDisabled(false);
            setEmail('');
            navigate('/reset-password');
        } catch (err) {
            const message = err?.response?.data?.message ?? 'Something Went Wrong!';
            dispatch({
                type: 'create-alert',
                payload: {
                    active: true,
                    type: 'error',
                    message,
                },
            });
        }
        setDisabled(false);
        setEmail('');
    };
    return (
        <GridLayout>
            <Card sx={{ maxWidth: '900px', height: 'max-content', paddingY: '80px', marginLeft: 'auto', marginRight: 'auto' }}>
                <AlertBar />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}>
                    <Typography component="h1" variant="h3">
                        Reset Password
                    </Typography>
                </Box>
                <Stack direction="column" spacing={4} sx={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        fullWidth
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />

                    <Button onClick={handleSubmit} variant="contained" disabled={disabled}>
                        <Typography component="h1" variant="h4">
                            {disabled ? 'Sending Email...' : 'Reset Your Password'}
                        </Typography>
                    </Button>
                    <Box>
                        <Button
                            sx={{ width: '60px', marginLeft: 'auto', marginTop: '30px', display: 'flex', padding: '12px' }}
                            onClick={() => {
                                navigate('/login');
                            }}
                        >
                            <Typography variant="h2" textTransform="capitalize">
                                Login
                            </Typography>
                        </Button>
                    </Box>
                </Stack>
            </Card>
        </GridLayout>
    );
};

ForgotPassword.propTypes = {};

export default ForgotPassword;
