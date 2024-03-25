import { useState, useEffect } from 'react';
import { useApi } from 'src/hooks/useApi';
import { Box, Stack, IconButton, Switch } from '@mui/material';
import CategoriesWrapper from 'src/layout/MenuItemsByCategories/CategoriesWrapper';
import { useTheme } from '@mui/material/styles';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';

const MenuItemsByCategories = () => {
    const { pageState, dispatch } = useFoodCodeContext();
    const { cancel, data, error, loaded } = useApi('http://localhost:3100/api/v1/menus/category', 'get', {}, pageState.refreshAllMenuItems);
    const [categories, setCategories] = useState([]);
    const theme = useTheme();
    useEffect(() => {
        if (loaded) {
            setCategories(data.data);
        }
    }, [data, loaded]);
    return (
        <Box minHeight="100vh" backgroundColor={`${theme.palette.grey['200']}`}>
            {categories.map((category) => {
                return (
                    <Box marginBottom="12px">
                        <CategoriesWrapper category={category} />
                    </Box>
                );
            })}
        </Box>
    );
};
export default MenuItemsByCategories;
