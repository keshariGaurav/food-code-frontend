import { useState } from 'react';
import MenusDropdown from 'src/layout/menusDropdown';
import PriceField from 'src/components/inputGroups/priceField';
import PlusAddButton from 'src/components/buttons/plusAddButton';
import Box from '@mui/material/Box';

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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <MenusDropdown handleChange={handleChange} value={item.sidekick} keyName="sidekick" />
            <PriceField keyName="price" value={item.price} callback={handleChange} />
            <PlusAddButton callback={handleAddItem} />
        </Box>
    );
};
export default AddOnItems;
