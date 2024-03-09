import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

const CustomToggleButton = (props) => {
    const theme = useTheme();

    const { toggleValue, initialValue, callback } = props;
    const [currentValue, setCurrentValue] = useState(initialValue);

    const handleChange = (event) => {
        setCurrentValue(event.target.value);
        callback(event.target.value);
    };
    return (
        <ToggleButtonGroup
            color="primary"
            value={currentValue}
            exclusive
            onChange={handleChange}
            sx={{
                '& .MuiToggleButtonGroup-grouped': {
                    '&.Mui-selected': {
                        backgroundColor: `${theme.palette.primary.main}`,
                        color: 'white',
                        '&:hover': {
                            backgroundColor: `${theme.palette.primary.dark}`,
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

export default CustomToggleButton;
