import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
const TextBox = (props) => {
    const label = props.label;
    const key = props.keyName;
    const callback = props.callback;
    const [value, setValue] = useState(props.value ?? null);
    console.log(key);
    useEffect(() => {
        if (callback) {
            callback(key, value);
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
