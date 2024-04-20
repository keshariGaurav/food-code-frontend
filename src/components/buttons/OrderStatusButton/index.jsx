import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
const OrderStatusButton = (props) => {
    const status = props.status;
    const orderId = props.orderId;
    const value = props.value;
    const index = props.index;
    const setIsLoading = props.setIsLoading;
    const setOrders = props.setOrders;
    const theme = useTheme();

    const getInitialState = (status) => {
        switch (status) {
            case 'pending':
                return {
                    text: 'Send to Kitchen',
                    color: 'primary',
                    disabled: false,
                };
            case 'send_to_kitchen':
                return {
                    text: 'Mark as Complete',
                    color: 'secondary',
                    disabled: false,
                };
            case 'complete':
                return {
                    text: 'Completed',
                    color: 'success',
                    disabled: true,
                };
            default:
                return {
                    text: 'Send to Kitchen',
                    color: 'primary',
                    disabled: false,
                };
        }
    };
    const [buttonState, setButtonState] = useState(() => getInitialState(status));

    const updateStatus = async (status) => {
        try {
            const response = await axios.patch(`http://localhost:3100/api/v1/order/${orderId}`, { status: status });
            setIsLoading(true);
            let apiUrl = 'http://localhost:3100/api/v1/order/';
            if (value === 1) {
                apiUrl += '?status=complete';
            }

            try {
                const response = await axios.get(apiUrl);
                setOrders(response.data.data);
            } catch (error) {
                console.log('Something went wrong!', error);
            } finally {
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleClick = () => {
        let newStatus;
        switch (buttonState.text) {
            case 'Send to Kitchen':
                setButtonState({
                    text: 'Mark as Complete',
                    color: 'secondary',
                    disabled: false,
                });
                newStatus = 'send_to_kitchen';
                break;
            case 'Mark as Complete':
                setButtonState({
                    text: 'Completed',
                    color: 'success',
                    disabled: true,
                });
                newStatus = 'complete';
                break;
            default:
                return;
        }
        updateStatus(newStatus);
    };

    return (
        <Button
            variant="contained"
            onClick={handleClick}
            disabled={buttonState.disabled}
            sx={{
                color:
                    buttonState.color === 'primary'
                        ? `${theme.palette.blue['800']}`
                        : buttonState.color === 'secondary'
                          ? `${theme.palette.primary.contrastText}`
                          : '#4caf50',
                backgroundColor:
                    buttonState.color === 'primary'
                        ? `${theme.palette.blue['200']}`
                        : buttonState.color === 'secondary'
                          ? `${theme.palette.primary.light}`
                          : '#4caf50',
                '&:hover': {
                    backgroundColor:
                        buttonState.color === 'primary'
                            ? `${theme.palette.blue['400']}`
                            : buttonState.color === 'secondary'
                              ? `${theme.palette.primary.main}`
                              : '#388e3c',
                },
            }}
        >
            {buttonState.text}
        </Button>
    );
};

export default OrderStatusButton;
