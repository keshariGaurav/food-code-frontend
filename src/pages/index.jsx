import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from 'src/pages/loginPage/index.jsx';
import CreateMenu from 'src/pages/createMenu/index.jsx';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context.jsx';
import GetMenuItem from 'src/pages/getMenu';
import Navbar from 'src/components/navbar';
import ForgotPassword from 'src/pages/ForgotPassword';
import ResetPassword from 'src/pages/ResetPassword';
import AlertBar from 'src/components/alertBar';
import axios from 'axios';
import GetOrder from './getOrder';

const Pages = (props) => {
    const { pageState, dispatch } = useFoodCodeContext();
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
                <PageLayout>
                    <Routes>
                        <Route path="/" element={<GetMenuItem />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/reset-password" element={<ResetPassword />} />
                        <Route path="/create-menu" element={<CreateMenu />} />
                        <Route path="/create-menu/:id" element={<CreateMenu />} />
                        <Route path="/order" element={<GetOrder />} />
                    </Routes>
                </PageLayout>
            </Box>
        </BrowserRouter>
    );
};

const PageLayout = ({ children }) => {
    const location = useLocation();
    const navBarURL = ['/login', '/forgot-password', '/reset-password'];
    const showNavbar = !navBarURL.includes(location.pathname);

    return (
        <div>
            {showNavbar && <Navbar />}
            {children}
        </div>
    );
};
export default Pages;
