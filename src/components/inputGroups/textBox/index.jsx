import { useState, useEffect } from 'react';
import { TextField, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import './index.css';

const TextBox = (props) => {
    const theme = useTheme();
    const label = props.label ?? 'Name';
    const key = props.keyName;
    const callback = props.callback;
    const [value, setValue] = useState(props.value ?? null);
    useEffect(() => {
        if (callback) {
            callback(key, value);
        }
    }, [value]);
    return (
        <Box width="100%">
            <Typography marginBottom={1} variant="h2" color={theme.palette.grey['700']}>
                {label}
            </Typography>
            <TextField
                fullWidth
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </Box>
    );
};
export default TextBox;
