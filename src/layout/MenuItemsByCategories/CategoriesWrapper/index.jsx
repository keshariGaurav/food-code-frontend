import { Box, Stack, Typography, Divider } from '@mui/material';
import MenuItemWrapper from 'src/layout/MenuItemsByCategories/MenuItemWrapper';

const CategoriesWrapper = (props) => {
    const category = props.category;
    const menus = category.menus;
    const removeItemFromList = props.removeItemFromList;
    return (
        <>
            <Box
                width="70%"
                backgroundColor="white"
                sx={{ border: '1px solid #d3d3d3', marginLeft: 'auto', marginRight: 'auto', padding: '24px 64px' }}
            >
                <Stack spacing={2}>
                    <Typography variant="h2">{category.category.name}</Typography>
                    {menus.map((menu, idx) => {
                        return (
                            <Box>
                                <MenuItemWrapper menu={menu} removeItemFromList={removeItemFromList} categoryId={category._id} />
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
