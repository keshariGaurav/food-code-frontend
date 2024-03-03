import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextBox from 'src/components/inputGroups/textBox';
import AddOnItems from 'src/layout/addOnItemsWrapper/addOnItems';
import Toggle from 'src/components/buttons/toggleButton';
import CustomRadio from 'src/components/radioGroups/radioInput';
import ActionButton from 'src/components/buttons/cancelSaveButton';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';
const AddOnItemsWrapper = (props) => {
    const { handleClose } = props;
    const { pageState, dispatch } = useFoodCodeContext();
    const addOnItem = 'add-addon-item';
    const [addonItems, setAddonItems] = useState({
        name: '',
        required: false,
        multiSelection: false,
        limit: true,
        limitSize: 0,
        items: [],
    });
    const handleChange = (updates) => {
        console.log(updates);
        setAddonItems((currentAddonItems) => {
            let newState = { ...currentAddonItems };
            Object.entries(updates).forEach(([key, value]) => {
                console.log(key, value);
                if (key === 'items') {
                    newState.items = [...newState.items, value];
                } else {
                    newState[key] = value;
                }
            });
            return newState;
        });
    };
    const handleSave = () => {
        dispatch({
            type: addOnItem,
            payload: {
                addOnItems: addonItems,
            },
        });
        handleClose();
    };
    const Selection = [
        {
            label: 'Single Selection',
            value: 'single_selection',
        },
        {
            label: 'Multi Selection',
            value: 'multi_selection',
        },
    ];
    const Options = [
        {
            label: 'Optional',
            value: 'optional',
        },
        {
            label: 'Required',
            value: 'required',
        },
    ];
    const handleRequired = (value) => {
        console.log(value);
        if (value === 'optional') {
            console.log(value);
            handleChange({
                required: false,
            });
        }
        if (value === 'required') {
            console.log(value);
            handleChange({
                required: true,
            });
        }
    };
    const handleOptional = (value) => {
        console.log(value);
        if (value === 'single_selection') {
            console.log(value);
            handleChange({
                multiSelection: false,
            });
        }
        if (value === 'multi_selection') {
            console.log(value);
            handleChange({
                multiSelection: true,
            });
        }
    };
    console.log(addonItems);
    return (
        <Box sx={{ border: '1px solid gray', padding: '12px' }}>
            <Stack spacing={4}>
                <TextBox label="Add-on name" keyName="name" callback={handleChange} />
                <Toggle toggleValue={Selection} initialValue={Selection[0].value} callback={handleOptional}></Toggle>
                <Toggle toggleValue={Options} initialValue={Options[0].value} callback={handleRequired}></Toggle>
                <CustomRadio callback={handleChange}></CustomRadio>
                <AddOnItems keyName="items" callback={handleChange} />
                <Stack spacing={2} direction={'row'}>
                    <ActionButton buttonName="Cancel" buttonColor="gray" callback={handleClose}></ActionButton>
                    <ActionButton buttonName="Save" buttonColor="red" callback={handleSave}></ActionButton>
                </Stack>
            </Stack>
        </Box>
    );
};
export default AddOnItemsWrapper;
