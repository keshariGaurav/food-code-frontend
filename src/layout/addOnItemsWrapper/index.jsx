import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextBox from 'src/components/inputGroups/textBox';
import AddOnItems from 'src/layout/addOnItemsWrapper/addOnItems';
const AddOnItemsWrapper = (props) => {
    const [addonItems, setAddonItems] = useState({
        name: '',
        required: false,
        multiSelection: false,
        limit: true,
        limitSize: 0,
        items: [],
    });
    const handleChange = (key, value) => {
        if (key == 'items') {
            setAddonItems({
                ...addonItems,
                items: [...addonItems.items, value],
            });
        } else {
            setAddonItems({ ...addonItems, [key]: value });
        }
    };
    return (
        <Box sx={{ border: '1px solid gray', padding: '12px' }}>
            <Stack spacing={4}>
                <TextBox label="Add-on name" keyName="name" callback={handleChange} />
                <AddOnItems keyName="items" callback={handleChange} />
            </Stack>
        </Box>
    );
};
export default AddOnItemsWrapper;
