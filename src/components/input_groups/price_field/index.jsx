import {useState} from 'react';
import NumericFormatCustom from '../../helper/NumericFormatCustom';
import TextField from '@mui/material/TextField';
const PriceField = (props)=>{
    const [value,setValue]=useState(null);
    return (
        <TextField
        autoFocus={false}
        value={value}
        onChange={setValue}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumericFormatCustom,
        }}
        sx={{width:'180px'}}
        
      />
    );
    }

export default PriceField;