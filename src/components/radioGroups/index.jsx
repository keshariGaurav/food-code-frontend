import { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Typography } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import { useTheme } from '@mui/material/styles';

const RadioGroups = (props) => {
    const theme = useTheme();
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
            <FormLabel id="demo-row-radio-buttons-group-label" sx={{ marginBottom: '8px' }}>
                <Typography variant="h2" color={theme.palette.grey['700']}>
                    {label}
                </Typography>
            </FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={selectedValue}
                onChange={handleChange}
            >
                {data.map((el, idx) => {
                    return (
                        <FormControlLabel
                            key={idx}
                            value={el.value}
                            control={
                                <Radio
                                    sx={{
                                        color: `${theme.palette.grey['700']}`,
                                        '&.Mui-checked': {
                                            color: 'white',
                                        },
                                    }}
                                />
                            }
                            label={el.label}
                            sx={{
                                borderColor: selectedValue === el.value ? `${theme.palette.primary.dark}` : `${theme.palette.grey['700']}`,
                                backgroundColor: selectedValue === el.value ? `${theme.palette.primary.main}` : 'white',
                                border: '1px solid',
                                borderRadius: '5px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '250px',
                                margin: '2px',
                                color: selectedValue === el.value ? 'white' : `${theme.palette.grey['700']}`,
                            }}
                        />
                    );
                })}
            </RadioGroup>
        </FormControl>
    );
};

export default RadioGroups;
