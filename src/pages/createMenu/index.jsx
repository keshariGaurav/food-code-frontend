import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import BackButton from 'src/components/buttons/backButton';
import NamePriceFieldWrapper from 'src/layout/namePriceWrapper';
import CategoriesDropdown from 'src/layout/categoriesDropdown';
import NewAddon from 'src/components/buttons/newAddon';
import AddOnItemsWrapper from 'src/layout/addOnItemsWrapper';
import UploadImage from 'src/components/uploadImage';
import RadioGroups from 'src/components/radioGroups';
import Divider from '@mui/material/Divider';
import AddonModal from 'src/components/modals/AddonModal';
import AlertBar from 'src/components/alertBar';

import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';

const CreateMenu = (props) => {
    const { pageState, dispatch } = useFoodCodeContext();
    const createMenuItem = 'create-menu-item';
    const image = pageState.menuItem?.image;
    const tagValue = pageState.menuItem.tag;
    const alertContent = pageState.alertBarContent;

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
                image: files,
            },
        });
    };
    return (
        <Box sx={{ width: '100%', padding: '16px 64px' }}>
            {alertContent.active && <AlertBar type={alertContent.type} message={alertContent.message} />}
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
            {/* <AddOnItemsWrapper /> */}
        </Box>
    );
};
export default CreateMenu;
