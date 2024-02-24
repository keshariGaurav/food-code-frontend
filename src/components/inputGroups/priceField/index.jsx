import { useState, useEffect } from 'react';
import NumericFormatCustom from 'src/components/helper/NumericFormatCustom';
import TextField from '@mui/material/TextField';
const PriceField = (props) => {
    const callback = props.callback;
    const key = props.keyName;
    const [value, setValue] = useState(props.value ?? null);

    useEffect(() => {
        if (callback) {
            callback(key, value);
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
