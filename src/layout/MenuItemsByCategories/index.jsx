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

    const removeItemFromList = (categoryId, menuId) => {
        setIsLoading(true);
        setCategories((currentCategories) => {
            const updatedCategories = currentCategories
                .map((category) => {
                    if (category._id.categoryId !== categoryId) return category;
                    const updatedMenus = category.menus.filter((menu) => menu._id !== menuId);
                    return { ...category, menus: updatedMenus };
                })
                .filter((category) => category.menus.length > 0);

            return updatedCategories;
        });
        setIsLoading(false);
        console.log(categoryId);
        console.log(menuId);
    };
    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <CircularProgress />
            </Box>
        );
    }
    console.log(categories);
    console.log(categories);
    return (
        <>
            <Box minHeight="100vh" backgroundColor={`${theme.palette.grey['200']}`}>
                {categories.map((category) => {
                    return (
                        <Box marginBottom="12px">
                            <CategoriesWrapper category={category} removeItemFromList={removeItemFromList} />
                        </Box>
                    );
                })}
            </Box>
            <BottomPlus />
        </>
    );
};
export default MenuItemsByCategories;
