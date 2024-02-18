import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
const TextBox = (props) => {
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
            label="Name"
            fullWidth
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
            }}
        />
    );
};
export default TextBox;
