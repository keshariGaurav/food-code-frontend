import { useState } from 'react';
import { Box, Stack, IconButton, Switch, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';

const MenuItemWrapper = (props) => {
    const { pageState, dispatch } = useFoodCodeContext();

    const menu = props.menu;
    const name = menu.name;
    const price = menu.price;
    const handleEdit = props.handleEdit;
    const id = menu._id;
    const [checked, setChecked] = useState(menu.available);

    const handleToggle = async (event) => {
        setChecked(event.target.checked);
        const response = await axios.post(`http://localhost:3100/api/v1/menus/available/${id}`, {
            available: event.target.checked,
        });
        dispatch({
            type: 'update-root',
            payload: {
                refreshAllMenuItems: !pageState.refreshAllMenuItems,
            },
        });
    };

    const handleDelete = async (event) => {
        const response = await axios.delete(`http://localhost:3100/api/v1/menus/${id}`);
        dispatch({
            type: 'update-root',
            payload: {
                refreshAllMenuItems: !pageState.refreshAllMenuItems,
            },
        });
    };

    return (
        <Box sx={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack spacing={1}>
                <Typography variant="h3">{name}</Typography>
                <Typography variant="h3">{`Rs. ${price}`}</Typography>
            </Stack>
            <Stack direction="row" width="25%" display="flex" justifyContent="space-between">
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton aria-label="delete" size="large" onClick={handleDelete}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="edit" size="large">
                        <EditIcon />
                    </IconButton>
                </Box>

                <Switch checked={checked} onChange={handleToggle} inputProps={{ 'aria-label': 'controlled' }} />
            </Stack>
        </Box>
    );
};
export default MenuItemWrapper;
