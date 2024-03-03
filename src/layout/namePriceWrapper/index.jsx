import Stack from '@mui/material/Stack';
import TextBox from 'src/components/inputGroups/textBox';
import PriceField from 'src/components/inputGroups/priceField';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';

const NamePriceFieldWrapper = (props) => {
    const { pageState, dispatch } = useFoodCodeContext();
    const createMenuItem = 'create-menu-item';
    const updateValues = (key, value) => {
        dispatch({
            type: createMenuItem,
            payload: {
                [key]: value,
            },
        });
    };

    return (
        <Stack alignItems="end" direction="row" spacing={2} sx={{ width: '100%' }}>
            <TextBox callback={updateValues} value={pageState.menuItem.name} keyName="name" />
            <PriceField callback={updateValues} value={pageState.menuItem.price} keyName="price" />
        </Stack>
    );
};
export default NamePriceFieldWrapper;
