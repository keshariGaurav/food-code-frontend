import { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';
const AlertBar = (props) => {
    const { pageState, dispatch } = useFoodCodeContext();
    const alertEvent = 'create-alert';

    const banner = pageState.alertBarContent.active;
    const severity = pageState.alertBarContent.type;
    const message = pageState.alertBarContent.message;
    useEffect(() => {
        if (banner) {
            setTimeout(() => {
                dispatch({
                    type: alertEvent,
                    payload: {
                        active: false,
                        type: '',
                        message: '',
                    },
                });
            }, 3000);
        }
    }, [banner]);
    if (!banner) return <></>;
    return <Alert severity={severity}>{message}</Alert>;
};
export default AlertBar;
