import { Box, Stack, Typography, Divider } from '@mui/material';
import MenuItemWrapper from 'src/layout/MenuItemsByCategories/MenuItemWrapper';

const CategoriesWrapper = (props) => {
    const category = props.category;
    const menus = category.menus;
    const setCategories = props.setCategories;
    const setIsLoading = props.setIsLoading;
    return (
        <>
            <Box backgroundColor="white" sx={{ border: '1px solid #d3d3d3', marginLeft: 'auto', marginRight: 'auto', padding: '24px 64px' }}>
                <Stack spacing={2}>
                    <Typography variant="h2">{category.category.name}</Typography>
                    {menus.map((menu, idx) => {
                        return (
                            <Box key={idx}>
                                <MenuItemWrapper menu={menu} setCategories={setCategories} setIsLoading={setIsLoading} />
                                {idx != menus.length - 1 && <Divider sx={{ marginTop: '15px' }} variant="middle" />}
                            </Box>
                        );
                    })}
                </Stack>
            </Box>
        </>
    );
};
export default CategoriesWrapper;
