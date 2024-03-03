import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';

const Toggle = (props) => {
    const { toggleValue, initialValue, callback } = props;
    const [currentValue, setCurrentValue] = useState(initialValue);

    const handleChange = (event) => {
        setCurrentValue(event.target.value);
        callback(event.target.value);
    };
    console.log(currentValue);
    return (
        <ToggleButtonGroup
            color="primary"
            value={currentValue}
            exclusive
            onChange={handleChange}
            sx={{
                '& .MuiToggleButtonGroup-grouped': {
                    '&.Mui-selected': {
                        backgroundColor: 'green',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'darkgreen',
                        },
                    },
                },
            }}
        >
            {toggleValue.map((toggle, index) => (
                <ToggleButton key={index} value={toggle.value}>
                    {toggle.label}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
};

export default Toggle;
