import NamePriceFieldWrapper from 'src/layout/name_price_field_wrapper';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';
import BackButton from 'src/components/buttons/back_button';
const ContainerHelper = (props) => {
    const { pageState, dispatch } = useFoodCodeContext();
    console.log(pageState);

    return <BackButton />;
};
export default ContainerHelper;
