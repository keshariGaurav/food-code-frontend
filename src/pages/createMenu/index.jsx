import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import BackButton from 'src/components/buttons/BackToButton';
import NamePriceFieldWrapper from 'src/layout/NamePriceFieldWrapper';
import CategoriesDropdown from 'src/layout/CategoriesDropdown';
import NewAddon from 'src/components/buttons/NewAddOnButton';
import AddOnItemsWrapper from 'src/layout/NewAddOn';
import UploadImage from 'src/components/UploadImage';
import RadioGroups from 'src/components/radioGroups';
import Divider from '@mui/material/Divider';
import AddonModal from 'src/components/modals/AddOnModal';
import AlertBar from 'src/components/alertBar';
import NewAddOnList from 'src/layout/NewAddOn/NewAddOnList';
import ActionButton from 'src/components/buttons/ActionButton';
import axios from 'axios';

import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';

const CreateMenu = (props) => {
    const { pageState, dispatch } = useFoodCodeContext();
    const createMenuItem = 'create-menu-item';
    const image = pageState.menuItem?.image;
    const tagValue = pageState.menuItem.tag;
    const alertContent = pageState.alertBarContent;
    const addOnItemsList = pageState.menuItem.addOnItems ?? [];
    const menuItem = pageState.menuItem;

    const tags = [
        {
            label: 'BEST SELLER',
            value: 'best_seller',
        },
        {
            label: 'MUST TRY',
            value: 'must_try',
        },
        {
            label: 'OUR SPECIAL',
            value: 'our_special',
        },
    ];
    const toggleValue = [
        {
            label: 'Required',
            value: 'required',
        },
        {
            label: 'Optional',
            value: 'optional',
        },
    ];

    const handleTags = (value) => {
        dispatch({
            type: createMenuItem,
            payload: {
                tag: value,
            },
        });
    };

    const goToHomePage = () => {
        //TODO - Function needs to implement after setting up Route Handler to handle back button behaviour.
    };
    const handleUpload = (files) => {
        dispatch({
            type: createMenuItem,
            payload: {
                image: 'url',
            },
        });
    };

    const handleDeleteForNewAddOnList = (idx) => {
        const list = [...pageState.menuItem.addOnItems];
        list.splice(idx, 1);
        dispatch({
            type: createMenuItem,
            payload: {
                addOnItems: list,
            },
        });
    };
    const handleClose = () => {
        // Will be implemented after setting up router
    };
    const handleSave = async () => {
        try {
            const response = await axios.post('http://localhost:3100/api/v1/menus', menuItem);
        } catch (error) {
            const message = error?.response?.data?.message ?? 'Something went wrong! Please try again later.';
            dispatch({
                type: 'create-alert',
                payload: {
                    active: true,
                    type: 'error',
                    message,
                },
            });
        }
    };
    return (
        <Box sx={{ width: '100%', padding: '16px 64px' }}>
            <AlertBar />
            <Box sx={{ marginBottom: '32px' }}>
                <BackButton callback={goToHomePage} />
            </Box>
            <Stack spacing={4}>
                <NamePriceFieldWrapper />
                <CategoriesDropdown />
                <UploadImage callback={handleUpload} value={image} />
                <RadioGroups label="Special Tags" data={tags} callback={handleTags} value={tagValue} />
            </Stack>
            <Divider sx={{ marginTop: '48px' }} textAlign="left">
                Selections
            </Divider>
            <Box sx={{ marginY: '32px', display: 'flex', justifyContent: 'center' }}>
                <AddonModal />
            </Box>
            <NewAddOnList data={addOnItemsList} callback={handleDeleteForNewAddOnList} />
            <Stack spacing={2} direction={'row'} sx={{ display: 'flex', justifyContent: 'center' }}>
                <ActionButton buttonName="Cancel" variant="cancel" callback={handleClose}></ActionButton>
                <ActionButton buttonName="Save" variant="save" callback={handleSave}></ActionButton>
            </Stack>
        </Box>
    );
};
export default CreateMenu;
