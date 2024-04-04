import { useState, useEffect } from 'react';
import { Box, Stack, IconButton, Switch } from '@mui/material';
import MenuItemsByCategories from 'src/layout/MenuItemsByCategories';

const GetMenuItem = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [imageUrl, setImageUrl] = useState('');

    return (
        <Box>
            <MenuItemsByCategories />
        </Box>
    );
};

export default GetMenuItem;
