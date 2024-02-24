import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import BackButton from 'src/components/buttons/backButton';
import NamePriceFieldWrapper from 'src/layout/namePriceWrapper';
import CategoriesDropdown from 'src/layout/categoriesDropdown';
const CreateMenu = (props) => {
    const goToHomePage = () => {
        //TODO - Function needs to implement after setting up Route Handler to handle back button behaviour.
    };
    return (
        <Box sx={{ width: '100%', padding: '16px 64px' }}>
            <Box sx={{ marginBottom: '32px' }}>
                <BackButton callback={goToHomePage} />
            </Box>
            <Stack spacing={4}>
                <NamePriceFieldWrapper />
                <CategoriesDropdown />
            </Stack>
        </Box>
    );
};
export default CreateMenu;
