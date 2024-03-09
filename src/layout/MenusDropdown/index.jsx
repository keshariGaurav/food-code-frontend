import BaseDropdown from 'src/components/dropdown/BaseDropdownComponent';
import { useApi } from 'src/hooks/useApi';

const MenusDropdown = (props) => {
    const value = props.value;
    const handleChange = props.handleChange;
    const keyName = props.keyName;
    const { cancel, data, error, loaded } = useApi('https://jsonplaceholder.typicode.com/todos/', 'get', {});

    const formatter = (data) => {
        const res = data?.data;
        if (res?.menuItems) {
            const formattedData = res?.menuItems?.map((item) => {
                return { label: item.name, value: item._id };
            });
            return formattedData;
        }
        return [];
    };

    if (!loaded) return <></>;
    return <BaseDropdown data={data} formatter={formatter} handleChangeCallback={handleChange} keyName={keyName} value={value} label="Select" />;
};
export default MenusDropdown;
