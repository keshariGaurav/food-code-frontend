import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Login from 'src/pages/loginPage/index.jsx';
import CreateMenu from 'src/pages/createMenu/index.jsx';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context.jsx';
import GetMenuItem from 'src/pages/getMenu';
import Navbar from 'src/components/navbar';
import ForgotPassword from 'src/pages/ForgotPassword';
import ResetPassword from 'src/pages/ResetPassword';
import Account from 'src/pages/Account';
import AlertBar from 'src/components/alertBar';
import ProfileDetails from 'src/pages/ProfileDetails';
import BankDetails from 'src/pages/BankDetails';
import axios from 'axios';
import GetOrder from './getOrder';
import RestaurantInfo from './RestaurantInfo';

const Pages = (props) => {
    const { pageState, dispatch } = useFoodCodeContext();
    const authenticated = pageState.authenticated;
    const loginRefresh = pageState.loginRefresh;

    const verifyLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3100/api/v1/cafe/verify-login');
            if (response.status === 201) {
                dispatch({
                    type: 'update-root',
                    payload: {
                        authenticated: true,
                    },
                });
            } else {
                dispatch({
                    type: 'update-root',
                    payload: {
                        authenticated: false,
                    },
                });
            }
        } catch (err) {
            const message = err?.response?.data?.message ?? 'Something Went Wrong!';
            dispatch({
                type: 'update-root',
                payload: {
                    authenticated: false,
                },
            });
        }
    };
    useEffect(() => {
        verifyLogin();
    }, [loginRefresh]);
    return (
        <BrowserRouter>
            <Box sx={{ width: '100vw', minHeight: '100vh', pt: 8 }}>
                <AlertBar />
                <PageLayout auth={authenticated}>
                    <Routes>
                        <Route path="/" element={<GetMenuItem />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/reset-password" element={<ResetPassword />} />

                        <Route
                            path="/create-menu"
                            element={
                                <AuthenticatedCheck auth={authenticated}>
                                    <CreateMenu />
                                </AuthenticatedCheck>
                            }
                        />
                        <Route
                            path="/create-menu/:id"
                            element={
                                <AuthenticatedCheck auth={authenticated}>
                                    <CreateMenu />
                                </AuthenticatedCheck>
                            }
                        />
                        <Route path="/account" element={<Account />} />
                        <Route path="/profile-details/:id" element={<ProfileDetails />} />
                        <Route
                            path="/orders"
                            element={
                                <AuthenticatedCheck auth={authenticated}>
                                    <GetOrder />
                                </AuthenticatedCheck>
                            }
                        />
                        <Route
                            path="/bank-details/:id"
                            element={
                                <AuthenticatedCheck auth={authenticated}>
                                    <BankDetails />
                                </AuthenticatedCheck>
                            }
                        />
                        <Route
                            path="/resturant-info"
                            element={
                                <AuthenticatedCheck auth={authenticated}>
                                    <RestaurantInfo />
                                </AuthenticatedCheck>
                            }
                        />
                    </Routes>
                </PageLayout>
            </Box>
        </BrowserRouter>
    );
};

const AuthenticatedCheck = (props) => {
    const auth = props.auth;
    const navigate = useNavigate();
    if (!auth) {
        navigate('/login');
    }
    return <>{props.children}</>;
};

const PageLayout = (props) => {
    const location = useLocation();
    const auth = props.auth;
    const navBarURL = ['/login', '/forgot-password', '/reset-password'];
    const showNavbar = !navBarURL.includes(location.pathname);

    return (
        <>
            <Navbar auth={auth} />
            {props.children}
        </>
    );
};
export default Pages;
