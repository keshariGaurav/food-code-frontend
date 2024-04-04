import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

export default function BottomPlus() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/create-menu');
    };
    return (
        <Box sx={{ position: 'fixed', bottom: 16, right: 16 }}>
            <Fab color="primary" aria-label="add" onClick={handleClick}>
                <AddIcon />
            </Fab>
        </Box>
    );
}
