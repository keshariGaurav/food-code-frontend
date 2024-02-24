import React, { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const BaseDropdown = (props) => {
    const label = props.label ?? 'Select';
    const selectedValue = props.value ?? null;
    const data = props.data ?? [];
    const formatter = props.formatter;
    const handleChangeCallback = props.handleChangeCallback;
    const [formattedData, setFormattedData] = useState([]);

    const handleChange = (event) => {
        if (handleChangeCallback) {
            handleChangeCallback(event.target.value);
        }
    };
    useEffect(() => {
        const res = formatter(data);
        setFormattedData(res);
    }, [data]);

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={selectedValue} onChange={handleChange}>
                {formattedData.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                        {item.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default BaseDropdown;
