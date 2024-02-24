import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';

const ContainerHelper = (props) => {
    const { pageState, dispatch } = useFoodCodeContext();
    const radioLabel = ['Best Seller', 'Must Try', 'Our Speical'];
    const formLabel = 'Special Tags';

    return <CategoryDropdown />;
};
export default ContainerHelper;
