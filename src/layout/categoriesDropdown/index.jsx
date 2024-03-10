import BaseDropdown from 'src/components/dropdown/BaseDropdownComponent';
import { useApi } from 'src/hooks/useApi';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';

const CategoriesDropdown = (props) => {
    const { pageState, dispatch } = useFoodCodeContext();
    const createMenuItem = 'create-menu-item';
    const value = pageState.menuItem?.categoryId;
    const { cancel, data, error, loaded } = useApi('http://localhost:3100/api/v1/category', 'get', {});

    const formatter = (data) => {
        const res = data?.data;
        if (res?.categories) {
            const formattedData = res?.categories?.map((category) => {
                return { label: category.name, value: category._id };
            });
            return formattedData;
        }
        return [];
    };

    const handleChange = (key, value) => {
        dispatch({
            type: createMenuItem,
            payload: {
                categoryId: value,
            },
        });
    };
    if (!loaded || error) return <></>;

    return <BaseDropdown data={data} formatter={formatter} keyName="category" handleChangeCallback={handleChange} value={value} label="Category" />;
};
export default CategoriesDropdown;
