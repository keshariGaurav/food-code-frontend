import BaseDropdown from 'src/components/dropdown/baseDropdown';
import { useApi } from 'src/hooks/useApi';

const MenusDropdown = (props) => {
    const value = props.value;
    const handleChange = props.handleChange;
    const keyName = props.keyName;
    const { data, isLoading, error, callApi } = useApi('http://localhost:3100/api/v1/menus', {});

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

    if (isLoading) return <></>;
    return <BaseDropdown data={data} formatter={formatter} handleChangeCallback={handleChange} keyName={keyName} value={value} label="Select" />;
};
export default MenusDropdown;
