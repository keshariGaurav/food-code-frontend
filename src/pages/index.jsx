import NamePriceFieldWrapper from "../layout/name_price_field_wrapper";
import FoodCodeProvider,{useFoodCodeContext} from "../store/Context";
const ContainerHelper = (props)=>{
  const {pageState,dispatch} = useFoodCodeContext();
  console.log(pageState);
  
  return <NamePriceFieldWrapper/>
}
export default ContainerHelper;