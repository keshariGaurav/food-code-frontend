import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState, useEffect } from 'react';

const RadioGroups = (props) => {
    const { label, data } = props;
    const defaultValue = props.value ?? null;
    const callback = props.callback;
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };

    useEffect(() => {
        if (callback) {
            callback(selectedValue);
        }
    }, [selectedValue]);

    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label" sx={{ color: 'gray', marginBottom: '8px' }}>
                {label}
            </FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={selectedValue}
                onChange={handleChange}
            >
                {data.map((el) => {
                    return (
                        <FormControlLabel
                            value={el.value}
                            control={
                                <Radio
                                    sx={{
                                        color: 'gray',
                                        '&.Mui-checked': {
                                            color: 'white',
                                        },
                                    }}
                                />
                            }
                            label={el.label}
                            sx={{
                                borderColor: selectedValue === el.value ? 'green' : 'grey',
                                backgroundColor: selectedValue === el.value ? 'green' : 'white',
                                border: '1px solid',
                                borderRadius: '5px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '250px',
                                margin: '2px',
                                color: selectedValue === el.value ? 'white' : 'black',
                            }}
                        />
                    );
                })}
            </RadioGroup>
        </FormControl>
    );
};

export default RadioGroups;
