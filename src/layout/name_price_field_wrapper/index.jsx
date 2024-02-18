import Stack from '@mui/material/Stack';
import TextBox from '../../components/input_groups/text_field'
import PriceField from "../../components/input_groups/price_field";
import FoodCodeProvider,{useFoodCodeContext} from "../../store/Context";

const NamePriceFieldWrapper = (props)=>{
    const {pageState,dispatch} = useFoodCodeContext();
    const updatePrice = (price)=>{
        dispatch({
            type:'update-root',
            payload:{
                price
            }
        })
    }
    return (
        <Stack direction='row' spacing={2} sx={{width:'100%'}}>
        <TextBox/>
        <PriceField callback = {updatePrice}/>
     </Stack>
    );
    
}
export default NamePriceFieldWrapper;