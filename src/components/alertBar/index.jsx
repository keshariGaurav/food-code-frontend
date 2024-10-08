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
    return (
        <div style={{ position: 'absolute', top: '100px', left: 0, right: 0, zIndex: 999 }}>
            <Alert severity={severity} sx={{ marginX: '20px' }}>
                {message}
            </Alert>
        </div>
    );
};
export default AlertBar;
