import BaseDropdown from 'src/components/dropdown/BaseDropdownComponent';
import { useApi } from 'src/hooks/useApi';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';

const CategoriesDropdown = (props) => {
    const { pageState, dispatch } = useFoodCodeContext();
    const createMenuItem = 'create-menu-item';
    const value = pageState.menuItem?.category;
    const { cancel, data, error, loaded } = useApi('https://jsonplaceholder.typicode.com/todos/', 'get', {});

    console.log(data);

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
                category: value,
            },
        });
    };
    if (!loaded || error) return <></>;

    return <BaseDropdown data={data} formatter={formatter} keyName="category" handleChangeCallback={handleChange} value={value} label="Category" />;
};
export default CategoriesDropdown;
