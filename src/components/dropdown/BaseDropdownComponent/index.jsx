import React, { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import axios from 'axios';

const BaseDropdownComponent = (props) => {
    const label = props.label ?? 'Select';
    const selectedValue = props.value ?? '';
    const data = props.data ?? [];
    const keyName = props.keyName ?? '';
    const formatter = props.formatter;
    const handleChangeCallback = props.handleChangeCallback;
    const [formattedData, setFormattedData] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        if (handleChangeCallback) {
            handleChangeCallback(keyName, event.target.value);
        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = async () => {
        const requestBody = {
            name: inputValue,
        };
        try {
            const response = await axios.post('http://localhost:3100/api/v1/category', requestBody);
            if (handleChangeCallback) {
                handleChangeCallback(keyName, response.data.data.category._id);
            }
            setFormattedData((data) => [
                ...data,
                {
                    label: response.data.data.category.name,
                    value: response.data.data.category._id,
                },
            ]);
        } catch (error) {
            console.error('Error while creating category:', error);
            throw error;
        }
    };

    useEffect(() => {
        const res = formatter(data);
        setFormattedData(res);
    }, [data]);

    return (
        <FormControl sx={{ m: 1, minWidth: 240 }}>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                sx={{ backgroundColor: '#f5f5f5' }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedValue}
                onChange={handleChange}
            >
                {formattedData.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                        <Typography variant="h3">{item.label}</Typography>
                    </MenuItem>
                ))}
            </Select>
            <Box sx={{ mt: 2, ml: 2 }}>
                <Stack direction="row" spacing={4}>
                    <TextField
                        label="Add a category"
                        variant="outlined"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={(e) => e.stopPropagation()}
                    />
                    <Button variant="contained" onClick={handleButtonClick}>
                        Add
                    </Button>
                </Stack>
            </Box>
        </FormControl>
    );
};

export default BaseDropdownComponent;
