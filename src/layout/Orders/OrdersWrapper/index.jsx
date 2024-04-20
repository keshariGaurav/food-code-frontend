import React, { useState } from 'react';
import { Box, Stack, IconButton, Switch, Typography, Divider } from '@mui/material';
import OrderStatusButton from 'src/components/buttons/OrderStatusButton';

const OrdersWrapper = (props) => {
    const order = props.order;
    const value = props.value;
    const index = props.index;
    const setIsLoading = props.setIsLoading;
    const setOrders = props.setOrders;
    const { totalAmount, tableNumber, status, orderDate, orderNumber, menuItems } = order;
    const diner = order.dinerId;

    const formatDate = (orderDate) => {
        const date = new Date(orderDate);
        const formattedDate =
            date.toLocaleDateString('en-IN', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
            }) +
            ' ' +
            date
                .toLocaleTimeString('en-IN', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                })
                .toUpperCase();
        return formattedDate;
    };
    return (
        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack spacing={1} sx={{ width: '100%' }}>
                <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
                    <Typography variant="h2">
                        Order ID: {orderNumber} | Table {tableNumber} (Rs.{totalAmount})
                    </Typography>
                    <Typography variant="h6" color="black" sx={{ fontWeight: 'bold' }}>
                        Order Placed
                    </Typography>
                </Stack>
                <Stack>
                    <Typography variant="h6" color="grey">
                        {diner.name}
                    </Typography>
                    <Typography variant="h6" color="grey">
                        {formatDate(orderDate)}
                    </Typography>
                </Stack>
                <Divider sx={{ marginTop: '15px' }} variant="middle" />
                <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
                    <Stack>
                        {menuItems.map((menuItem, idx) => {
                            return (
                                <Typography variant="h5" key={idx}>
                                    {menuItem.menuItemId.name} X {menuItem.quantity}
                                </Typography>
                            );
                        })}
                    </Stack>
                    <OrderStatusButton
                        status={status}
                        orderId={order._id}
                        value={value}
                        index={index}
                        setOrders={setOrders}
                        setIsLoading={setIsLoading}
                    />
                </Stack>
            </Stack>
        </Box>
    );
};

export default OrdersWrapper;
