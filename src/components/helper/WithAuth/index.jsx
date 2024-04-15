import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';

export const WithAuth = (WrappedComponent) => {
    return function WithAuthComponent(props) {
        const { pageState, dispatch } = useFoodCodeContext();
        const authenticated = pageState.authenticated ?? null;
        if (authenticated === null) {
            return <></>;
        }

        if (authenticated === false) {
            return <Navigate to="/login" />;
        }

        return <WrappedComponent {...props} />;
    };
};
