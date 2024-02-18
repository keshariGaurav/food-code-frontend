import { useState, useEffect } from 'react';
import NumericFormatCustom from 'src/components/helper/NumericFormatCustom';
import TextField from '@mui/material/TextField';
const PriceField = (props) => {
    const callback = props.callback;
    const [value, setValue] = useState(null);

    useEffect(() => {
        if (callback) {
            callback(value);
        }
    }, [value]);

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
            sx={{ width: '180px' }}
        />
    );
};

export default PriceField;
