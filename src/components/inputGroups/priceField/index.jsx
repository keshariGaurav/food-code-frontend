import { useState, useEffect } from 'react';
import NumericFormatCustom from 'src/components/helper/NumericFormatCustom';
import TextField from '@mui/material/TextField';
const PriceField = (props) => {
    const callback = props.callback;
    const key = props.keyName;
    const defaultValue = props.value ?? null;
    const [value, setValue] = useState(defaultValue);

    useEffect(() => {
        const val = parseFloat(value);
        if (callback) {
            callback(key, val);
        }
    }, [value]);

    return (
        <TextField
            autoFocus={false}
            placeholder="Price"
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
