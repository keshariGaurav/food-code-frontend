import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box, Stack, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import OrdersWrapper from 'src/layout/Orders/OrdersWrapper';
import { useApi } from 'src/hooks/useApi';
import { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

function CustomTabPanel(props) {
    const { value, index, isLoading, orders, setOrders, setIsLoading, ...other } = props;

    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <CircularProgress />
            </Box>
        );
    }
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            style={{ width: '100%', marginTop: '20px' }}
        >
            {value === index &&
                orders.map((order, idx) => {
                    return (
                        <Box
                            key={idx}
                            width="70%"
                            backgroundColor="white"
                            sx={{ border: '1px solid #d3d3d3', marginLeft: 'auto', marginRight: 'auto', padding: '24px 64px', marginBottom: '10px' }}
                        >
                            <Stack spacing={2}>
                                <OrdersWrapper order={order} value={value} index={index} setOrders={setOrders} setIsLoading={setIsLoading} />
                            </Stack>
                        </Box>
                    );
                })}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const OrdersTabWrapper = (props) => {
    const [value, setValue] = React.useState(0);
    const theme = useTheme();
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        const socket = io('http://localhost:3100');
        socket.on('connect', () => {
            console.log('Connected to the server via Socket.IO');
        });

        socket.on('orderCreated', (newOrder) => {
            console.log('New order received:', newOrder);
            const isNewOrderCompleted = newOrder.status === 'complete';
            if ((isNewOrderCompleted && value === 1) || (!isNewOrderCompleted && value === 0)) {
                setOrders((currentOrders) => [...currentOrders, newOrder]);
            }
        });

        return () => {
            socket.off('orderCreated');
            socket.disconnect();
        };
    }, [value]);
    useEffect(() => {
        const fetchData = async () => {
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
        };

        fetchData();
    }, [value]);
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
            backgroundColor={`${theme.palette.grey['200']}`}
        >
            <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: 'white', width: '100%' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth">
                    <Tab label="Current" {...a11yProps(0)} sx={{ typography: 'h4', mt: '20px' }} />
                    <Tab label="Completed" {...a11yProps(1)} sx={{ typography: 'h4', mt: '20px' }} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0} orders={orders} isLoading={isLoading} setOrders={setOrders} setIsLoading={setIsLoading}>
                Current
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1} orders={orders} isLoading={isLoading} setOrders={setOrders} setIsLoading={setIsLoading}>
                Completed
            </CustomTabPanel>
        </Box>
    );
};

export default OrdersTabWrapper;
