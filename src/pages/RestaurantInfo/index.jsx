import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Box, Stack, Typography, Grid, Card, Button, Checkbox } from '@mui/material';
import BackToButton from 'src/components/buttons/BackToButton';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import GridLayout from 'src/layout/GridLayout';

const RestaurantInfo = (props) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const [table, setTable] = useState([]);
    const [totalTable, setTotalTable] = useState(10);
    const [qrCode, setQrCode] = useState([]);

    const handleBackButton = () => {
        navigate('/account');
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3100/api/v1/account/get-qr', {
                table,
            });
            setQrCode(response.data.data.response);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };
    const handleTotalTable = () => {
        setTotalTable((prev) => {
            return prev + 1;
        });
    };
    const handleTable = (index) => {
        setTable((prevArray) => [...prevArray, index + 1]);
        console.log(index);
    };
    const handleCheckBox = (event) => {
        if (event.target.checked) {
            setTable(Array.from({ length: totalTable }, (_, i) => i + 1));
        } else {
            setTable([]);
        }
    };

    return (
        <GridLayout>
            <Card sx={{ padding: '20px', marginX: 'auto', maxWidth: '900px' }}>
                <BackToButton callback={handleBackButton} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px', marginTop: '15px' }}>
                    <Typography component="h1" variant="h2">
                        Tables
                    </Typography>
                </Box>
                <Grid container spacing={1} alignItems="center">
                    <Grid item>
                        <Checkbox onChange={handleCheckBox} />
                    </Grid>
                    <Grid item>
                        <Typography>Select All</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ marginTop: '20px' }}>
                    {Array.from({ length: totalTable }, (_, index) => (
                        <Grid item key={index}>
                            <Button
                                variant="contained"
                                color={table.includes(index + 1) ? 'primary' : 'common'}
                                style={{ minWidth: '60px', height: '60px' }}
                                onClick={() => {
                                    handleTable(index);
                                }}
                            >
                                {index + 1}
                            </Button>
                        </Grid>
                    ))}

                    <Grid item spacing={1}>
                        <Button variant="outlined" style={{ minWidth: '60px', height: '60px' }} onClick={handleTotalTable}>
                            +
                        </Button>
                        <Typography>Add a Table</Typography>
                    </Grid>
                </Grid>
                <Box mt={2}>
                    <Stack direction="row" alignItems="flex-start" gap={2}>
                        <Button onClick={handleSubmit} variant="contained" sx={{ width: 'max-content' }}>
                            Request new QR's
                        </Button>
                    </Stack>
                </Box>
                {qrCode ? (
                    <Grid container spacing={2} style={{ marginTop: '20px' }}>
                        {qrCode.map((qr) => {
                            return (
                                <Grid item key={qr.tableNo}>
                                    <img src={qr.qrCodeImage} alt="QR Code" />
                                </Grid>
                            );
                        })}
                    </Grid>
                ) : null}
            </Card>
        </GridLayout>
    );
};

RestaurantInfo.propTypes = {};

export default RestaurantInfo;
