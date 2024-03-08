import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import NewAddon from 'src/components/buttons/newAddon';
import AddOnItemsWrapper from 'src/layout/addOnItemsWrapper';
import { useTheme } from '@mui/material/styles';

export default function AddonModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const theme = useTheme();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70vw',
        bgcolor: 'background.paper',
        border: `2px solid ${theme.palette.primary.light}`,
        borderRadius: '5px',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <NewAddon callback={handleOpen} />
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <AddOnItemsWrapper handleClose={handleClose} />
                </Box>
            </Modal>
        </div>
    );
}
