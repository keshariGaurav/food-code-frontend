import NamePriceFieldWrapper from 'src/layout/name_price_field_wrapper';
import RadioButtonGroup from 'src/components/radio_groups';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';
import BackButton from 'src/components/buttons/back_button';
import UploadImage from 'src/components/upload_image';
const ContainerHelper = (props) => {
    const { pageState, dispatch } = useFoodCodeContext();
    const radioLabel = ['Best Seller', 'Must Try', 'Our Speical'];
    const formLabel = 'Special Tags';

    return <CategoryDropdown />;
};
export default ContainerHelper;
