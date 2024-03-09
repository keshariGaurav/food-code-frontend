import { useState } from 'react';
import { Box, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import TextBox from 'src/components/inputGroups/TextBox';
import AddOnItems from 'src/layout/NewAddOn/AddOnItems';
import Toggle from 'src/components/buttons/CustomToggleButton';
import CustomRadio from 'src/components/radioGroups/CustomRadio';
import ActionButton from 'src/components/buttons/ActionButton';
import AddOnItemsList from 'src/layout/NewAddOn/AddOnItems/AddOnItemsList';

import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';
const NewAddOn = (props) => {
    const theme = useTheme();
    const { handleClose } = props;
    const { pageState, dispatch } = useFoodCodeContext();
    const addOnItemsList = pageState.menuItem.addonItems;
    const addOnItem = 'add-addon-item';
    const [addonItems, setAddonItems] = useState({
        name: '',
        required: false,
        multiSelection: false,
        limit: true,
        limitSize: 0,
        items: [],
    });
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
    const handleChange = (key, value) => {
        setAddonItems((currentAddonItems) => {
            let newState = { ...currentAddonItems };
            if (key === 'items') {
                newState.items = [...newState.items, value];
            } else {
                newState[key] = value;
            }
            return newState;
        });
    };
    const handleCustomRadio = (updates) => {
        setAddonItems((currentAddonItems) => {
            let newState = { ...currentAddonItems };
            Object.entries(updates).forEach(([key, value]) => {
                newState[key] = value;
            });
            return newState;
        });
    };
    const handleSave = () => {
        dispatch({
            type: addOnItem,
            payload: {
                addonItems: addonItems,
            },
        });
        handleClose();
    };

    const handleRequired = (value) => {
        if (value === 'optional') {
            handleChange('required', false);
        }
        if (value === 'required') {
            handleChange('required', true);
        }
    };
    const handleOptional = (value) => {
        if (value === 'single_selection') {
            handleChange('multiSelection', false);
        }
        if (value === 'multi_selection') {
            handleChange('multiSelection', true);
        }
    };
    const handleDeleteItems = (idx) => {
        const items = [...addonItems.items];
        items.splice(idx, 1);
        setAddonItems((currentAddonItems) => {
            let newState = { ...currentAddonItems };
            newState.items = items;
            return newState;
        });
    };
    return (
        <Box sx={{ border: `1px solid ${theme.palette.primary.main}`, borderRadius: '10px', padding: '16px' }}>
            <Stack spacing={4}>
                <TextBox label="Add-on name" keyName="name" callback={handleChange} />
                <Toggle toggleValue={Selection} initialValue={Selection[0].value} callback={handleOptional}></Toggle>
                <Toggle toggleValue={Options} initialValue={Options[0].value} callback={handleRequired}></Toggle>
                <CustomRadio callback={handleCustomRadio}></CustomRadio>
                <AddOnItems keyName="items" callback={handleChange} />
                <AddOnItemsList data={addonItems.items} callback={handleDeleteItems} />

                <Stack spacing={2} direction={'row'}>
                    <ActionButton buttonName="Cancel" variant="cancel" callback={handleClose}></ActionButton>
                    <ActionButton buttonName="Save" variant="save" callback={handleSave}></ActionButton>
                </Stack>
            </Stack>
        </Box>
    );
};
export default NewAddOn;
