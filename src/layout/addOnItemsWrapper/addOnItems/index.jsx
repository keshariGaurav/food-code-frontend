import { useState } from 'react';
import TextBox from 'src/components/inputGroups/textBox';
import PriceField from 'src/components/inputGroups/priceField';
import PlusAddButton from 'src/components/buttons/plusAddButton';
import { Box, Stack } from '@mui/material';

const AddOnItems = (props) => {
    const callback = props.callback;
    const keyName = props.keyName;

    const [item, setItem] = useState({
        sidekick: '',
        price: '',
    });
    const handleChange = (key, value) => {
        setItem({
            ...item,
            [key]: value,
        });
    };
    const handleAddItem = () => {
        if (item.sidekick && item.price) callback(keyName, item);
        setItem({
            sidekick: '',
            price: '',
        });
    };

    return (
        <Stack direction="row" gap={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <TextBox callback={handleChange} value={item.sidekick} keyName="sidekick" />
            <PriceField keyName="price" value={item.price} callback={handleChange} />
            <PlusAddButton callback={handleAddItem} />
        </Stack>
    );
};
export default AddOnItems;
