import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
const TextBox = (props) => {
    const label = props.label;
    const callback = props.callback;
    const [value, setValue] = useState('');
    useEffect(() => {
        if (callback) {
            callback(value);
        }
    }, [value]);
    return (
        <TextField
            required
            id="outlined-required"
            label={label}
            fullWidth
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
                console.log(value);
            }}
        />
    );
};
export default TextBox;
