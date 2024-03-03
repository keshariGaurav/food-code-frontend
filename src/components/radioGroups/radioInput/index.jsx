import React, { useState } from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, TextField, Box } from '@mui/material';

const CustomRadio = (props) => {
    const callback = props.callback;
    const [selectedValue, setSelectedValue] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
        if (event.target.value === 'no_limits') {
            callback({ limit: false, limitSize: 0 });
        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        callback({
            limit: true,
            limitSize: event.target.value,
        });
    };

    return (
        <FormControl component="fieldset">
            <RadioGroup aria-label="options" name="options" value={selectedValue} onChange={handleRadioChange} row>
                <FormControlLabel value="no_limits" control={<Radio />} label="No. limits" />
                <FormControlLabel
                    value="max_limit"
                    control={<Radio />}
                    label={
                        <Box display="flex" alignItems="center" ml={1}>
                            Max Limit
                            <TextField
                                size="small"
                                variant="outlined"
                                style={{ marginLeft: 8, width: '80px' }}
                                disabled={selectedValue !== 'max_limit'}
                                value={inputValue}
                                onChange={handleInputChange}
                                InputProps={{
                                    sx: {
                                        '.MuiInputBase-input': {
                                            padding: '10px 14px',
                                            fontSize: '0.875rem',
                                        },
                                    },
                                }}
                            />
                        </Box>
                    }
                />
            </RadioGroup>
        </FormControl>
    );
};

export default CustomRadio;
