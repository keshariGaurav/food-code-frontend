import { useState, useEffect } from 'react';
import { useApi } from 'src/hooks/useApi';
import { Box, Stack, IconButton, Switch, CircularProgress } from '@mui/material';
import CategoriesWrapper from 'src/layout/MenuItemsByCategories/CategoriesWrapper';
import { useTheme } from '@mui/material/styles';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';
import BottomPlus from 'src/components/bottomPlus';
const MenuItemsByCategories = () => {
    const { pageState, dispatch } = useFoodCodeContext();
    const { cancel, data, error, loaded } = useApi('http://localhost:3100/api/v1/menus/category', 'get', {}, pageState.refreshAllMenuItems);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const theme = useTheme();
    useEffect(() => {
        if (loaded) {
            setIsLoading(false);
            setCategories(data.data);
        }
    }, [data, loaded, isLoading]);

    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <CircularProgress />
            </Box>
        );
    }
    return (
        <>
            <Box minHeight="100vh" paddingY="32px" backgroundColor={`${theme.palette.grey['200']}`}>
                {categories.map((category) => {
                    return (
                        <Box marginBottom="12px">
                            <CategoriesWrapper category={category} setCategories={setCategories} setIsLoading={setIsLoading} />
                        </Box>
                    );
                })}
            </Box>
            <BottomPlus />
        </>
    );
};
export default MenuItemsByCategories;
