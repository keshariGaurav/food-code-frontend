import BaseDropdown from 'src/components/dropdown/baseDropdown';
import { useApi } from 'src/hooks/useApi';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';

const CategoriesDropdown = (props) => {
    const { pageState, dispatch } = useFoodCodeContext();
    const createMenuItem = 'create-menu-item';
    const value = pageState.menuItem?.category;
    const { data, isLoading, error, callApi } = useApi('http://localhost:3100/api/v1/category', {});

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

    const handleChange = (value) => {
        dispatch({
            type: createMenuItem,
            payload: {
                category: value,
            },
        });
    };
    if (isLoading) return <></>;

    return <BaseDropdown data={data} formatter={formatter} handleChangeCallback={handleChange} value={value} label="Category" />;
};
export default CategoriesDropdown;
