import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useTheme } from '@mui/material/styles';
import { Button, Stack } from '@mui/material';
import { Typography } from '@mui/material';

export default function DeleteModal(props) {
    const { open, handleClose, handleOpen, handleDelete } = props;
    const theme = useTheme();

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30vw',
        height: '8vw',
        bgcolor: 'background.paper',
        border: `2px solid ${theme.palette.primary.light}`,
        borderRadius: '5px',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography
                        id="modal-modal-description"
                        variant="h5"
                        sx={{
                            display: 'flex',
                            'justify-content': 'center',
                            'align-items': 'center',
                        }}
                    >
                        Are you sure want to delete Item?
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                            display: 'flex',
                            'justify-content': 'center',
                            'align-items': 'center',
                            mt: 2,
                        }}
                    >
                        <Button variant="success" onClick={handleDelete}>
                            Yes
                        </Button>
                        <Button onClick={handleClose} variant="save">
                            No
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}
