import { useState } from 'react';
import TextBox from 'src/components/inputGroups/TextBox';
import PriceField from 'src/components/inputGroups/PriceField';
import PlusAddButton from 'src/components/buttons/PlusAddOnButton';
import { Box, Stack } from '@mui/material';
import AlertBar from 'src/components/alertBar';

const AddOnItems = (props) => {
    const callback = props.callback;
    const keyName = props.keyName;
    const [clearField, setClearField] = useState(false);

    const [item, setItem] = useState({
        item: '',
        price: '',
    });
    const handleChange = (key, value) => {
        setItem({
            ...item,
            [key]: value,
        });
    };
    const handleAddItem = () => {
        if (item.item && item.price) {
            callback(keyName, item);
            setClearField(true);
        } else {
        }
    };

    return (
        <Stack direction="row" gap={4} sx={{ display: 'flex', alignItems: 'center' }}>
            <TextBox callback={handleChange} value={item.item} keyName="item" setClearField={setClearField} clearField={clearField} />
            <PriceField keyName="price" value={item.price} callback={handleChange} setClearField={setClearField} clearField={clearField} />
            <PlusAddButton callback={handleAddItem} />
        </Stack>
    );
};
export default AddOnItems;
