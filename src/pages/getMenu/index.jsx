import { useState, useEffect } from 'react';
import { Box, Stack, IconButton, Switch } from '@mui/material';
import MenuItemsByCategories from 'src/layout/MenuItemsByCategories';
import { WithAuth } from 'src/components/helper/WithAuth';
import GridLayout from 'src/layout/GridLayout';

const GetMenuItem = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [imageUrl, setImageUrl] = useState('');

    return (
        <GridLayout>
            <MenuItemsByCategories />
        </GridLayout>
    );
};

export default WithAuth(GetMenuItem);
