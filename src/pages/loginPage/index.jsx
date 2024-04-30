import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Stack, Box, TextField, IconButton, InputAdornment, Link, Grid, FormControlLabel, Checkbox } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';
import AlertBar from 'src/components/alertBar';
import PasswordValidator from 'src/components/basic/PasswordValidator';
import GridLayout from 'src/layout/GridLayout';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

const Login = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isdisable, setIsdisable] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);

    const navigate = useNavigate();
    const { pageState, dispatch } = useFoodCodeContext();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        const isValid = userName.length > 0 && isValidPassword;
        setIsdisable(!isValid);
    }, [userName, isValidPassword]);

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3100/api/v1/cafe/signin', {
                email: userName,
                password,
            });
            dispatch({
                type: 'update-root',
                payload: {
                    loginRefresh: true,
                },
            });
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
    };
    const handleForgotPassword = () => {
        navigate('/forgot-password');
    };
    return (
        <GridLayout>
            <Card sx={{ padding: '20px', marginX: 'auto', maxWidth: '900px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
                    <Avatar sx={{ m: 1 }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                </Box>
                <Stack direction="column" spacing={4}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        fullWidth
                        value={userName}
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        fullWidth
                        value={password}
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <PasswordValidator password={password} setIsValidPassword={setIsValidPassword} />
                    <Button onClick={handleSubmit} variant="contained" disabled={isdisable}>
                        Login
                    </Button>
                    <Box>
                        <Button
                            sx={{ width: 'max-content', marginLeft: 'auto', marginTop: '30px', display: 'flex', padding: '12px' }}
                            onClick={handleForgotPassword}
                        >
                            <Typography variant="h4" textTransform="capitalize">
                                Forgot Password
                            </Typography>
                        </Button>
                    </Box>
                </Stack>
            </Card>
        </GridLayout>
    );
};

export default Login;
