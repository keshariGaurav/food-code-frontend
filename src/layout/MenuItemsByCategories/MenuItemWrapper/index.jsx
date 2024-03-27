import React, { useState } from 'react';
import { Box, Stack, IconButton, Switch, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Step 1: Import useNavigate
import DeleteModal from 'src/components/modals/DeleteModal';

const MenuItemWrapper = (props) => {
    const { menu, handleEdit } = props;
    const { _id: id, name, price, available } = menu;
    const [checked, setChecked] = useState(available);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleToggle = async (event) => {
        setChecked(event.target.checked);
        await axios.post(`http://localhost:3100/api/v1/menus/available/${id}`, {
            available: event.target.checked,
        });
    };

    const handleDelete = async () => {
        await axios.delete(`http://localhost:3100/api/v1/menus/${id}`);
        handleClose();
    };

    const handleEditClick = () => {
        navigate(`/create-menu/${id}`);
    };

    return (
        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack spacing={1}>
                <Typography variant="h3">{name}</Typography>
                <Typography variant="h3">{`Rs. ${price}`}</Typography>
            </Stack>
            <Stack direction="row" width="25%" justifyContent="space-between">
                <IconButton aria-label="delete" size="large" onClick={handleOpen}>
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="edit" size="large" onClick={handleEditClick}>
                    <EditIcon />
                </IconButton>
                <Switch checked={checked} onChange={handleToggle} inputProps={{ 'aria-label': 'controlled' }} />
            </Stack>
            <DeleteModal open={open} handleClose={handleClose} handleDelete={handleDelete} />
        </Box>
    );
};

export default MenuItemWrapper;
