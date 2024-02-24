import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import BackButton from 'src/components/buttons/backButton';
import NamePriceFieldWrapper from 'src/layout/namePriceWrapper';
import CategoriesDropdown from 'src/layout/categoriesDropdown';
import UploadImage from 'src/components/uploadImage';
import RadioGroups from 'src/components/radioGroups';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';

const CreateMenu = (props) => {
    const { pageState, dispatch } = useFoodCodeContext();
    const createMenuItem = 'create-menu-item';
    const image = pageState.menuItem?.image;
    const tagValue = pageState.menuItem.tag;

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
            <Box sx={{ marginBottom: '32px' }}>
                <BackButton callback={goToHomePage} />
            </Box>
            <Stack spacing={4}>
                <NamePriceFieldWrapper />
                <CategoriesDropdown />
                <UploadImage callback={handleUpload} value={image} />
                <RadioGroups label="Special Tags" data={tags} callback={handleTags} value={tagValue} />
            </Stack>
        </Box>
    );
};
export default CreateMenu;
