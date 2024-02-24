import NamePriceFieldWrapper from 'src/layout/namePriceWrapper';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';
import BackButton from 'src/components/buttons/backButton';
import CategoryDropdown from 'src/components/dropdown/baseDropdown';
const ContainerHelper = (props) => {
    const { pageState, dispatch } = useFoodCodeContext();
    console.log(pageState);

    return <CategoryDropdown />;
};
export default ContainerHelper;
