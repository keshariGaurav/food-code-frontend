import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';

const RadioButtonGroup = (props) => {
    const { formLabel, radioLabel } = props;
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
    };
    return (
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">{formLabel}</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={selectedValue}
                onChange={handleChange}
            >
                {radioLabel.map((label) => {
                    return (
                        <FormControlLabel
                            value={label}
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
                            label={label}
                            sx={{
                                borderColor: selectedValue === label ? 'green' : 'grey',
                                backgroundColor: selectedValue === label ? 'green' : 'white',
                                border: '1px solid',
                                borderRadius: '5px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '150px',
                                margin: '2px',
                                color: selectedValue === label ? 'white' : 'black',
                            }}
                        />
                    );
                })}
            </RadioGroup>
        </FormControl>
    );
};

export default RadioButtonGroup;
