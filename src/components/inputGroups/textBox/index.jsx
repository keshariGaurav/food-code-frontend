import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
const TextBox = (props) => {
    const label = props.label ?? 'Name';
    const key = props.keyName;
    const callback = props.callback;
    const [value, setValue] = useState(props.value ?? null);
    useEffect(() => {
        if (callback) {
            callback({ key: value });
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
            }}
        />
    );
};
export default TextBox;
