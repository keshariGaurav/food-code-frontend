import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Card, Stack, Box, TextField, Typography, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';
import PasswordValidator from 'src/components/basic/PasswordValidator';
import GridLayout from 'src/layout/GridLayout';

const ResetPassword = (props) => {
    const { pageState, dispatch } = useFoodCodeContext();
    const email = pageState.email;
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValidPassword, setIsValidPassword] = useState(false);

    const navigate = useNavigate();
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        if (otp.length > 0) {
            setDisabled(!isValidPassword);
        } else {
            setDisabled(true);
        }
    }, [otp, isValidPassword, confirmPassword]);

    const handleSubmit = async () => {
        setDisabled(true);
        try {
            const response = await axios.patch('http://localhost:3100/api/v1/cafe/resetPassword', {
                email,
                otp,
                password,
                passwordConfirm: confirmPassword,
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
            setDisabled(false);
            navigate('/');
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
    };
    return (
        <GridLayout>
            <Card sx={{ maxWidth: '900px', paddingY: '80px', marginX: 'auto' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '40px' }}>
                    <Typography component="h1" variant="h3">
                        Enter Password Reset OTP
                    </Typography>
                </Box>
                <Stack direction="column" spacing={4} sx={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Password Reset OTP"
                        fullWidth
                        value={otp}
                        onChange={(e) => {
                            setOtp(e.target.value);
                        }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        fullWidth
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Confirm Password"
                        fullWidth
                        value={confirmPassword}
                        onChange={(e) => {
                            setConfirmPassword(e.target.value);
                        }}
                    />
                    <PasswordValidator password={password} setIsValidPassword={setIsValidPassword} confirmPassword={confirmPassword} />
                    <Button onClick={handleSubmit} variant="contained" disabled={disabled}>
                        <Typography component="h1" variant="h4">
                            Update Your Password
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

ResetPassword.propTypes = {};

export default ResetPassword;
