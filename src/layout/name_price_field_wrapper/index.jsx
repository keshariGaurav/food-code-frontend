import Stack from '@mui/material/Stack';
import TextBox from '../../components/input_groups/text_field'
import PriceField from "../../components/input_groups/price_field";

const NamePriceFieldWrapper = (props)=>{
    return (
        <Stack direction='row' spacing={2} sx={{width:'100%'}}>
        <TextBox/>
        <PriceField/>
     </Stack>
    );
    
}
export default NamePriceFieldWrapper;