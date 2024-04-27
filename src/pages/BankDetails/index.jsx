import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Box, Stack, IconButton, Switch, Typography, Grid, Card, TextField, Button } from '@mui/material';
import BackToButton from 'src/components/buttons/BackToButton';
import { useTheme } from '@mui/material/styles';
import GridLayout from 'src/layout/GridLayout';
import { useNavigate, useParams } from 'react-router-dom';

import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';

const BankDetails = (props) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const { pageState, dispatch } = useFoodCodeContext();
    const { id } = useParams();

    const [account, setAccount] = useState(pageState.bankDetails);

    const updateField = (key, value) => {
        setAccount((prevAccount) => ({
            ...prevAccount,
            [key]: value,
        }));
    };
    const handleBackButton = () => {
        navigate(`/account`);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.patch(`http://localhost:3100/api/v1/account/${id}`, { bankDetails: account });
            dispatch({
                type: 'create-alert',
                payload: {
                    active: true,
                    type: 'success',
                    message: 'Successfully Updated!',
                },
            });

            handleBackButton();
        } catch (error) {
            dispatch({
                type: 'create-alert',
                payload: {
                    active: true,
                    type: 'error',
                    message: error.message,
                },
            });
        }
    };

    return (
        <GridLayout>
            <Card sx={{ padding: '20px', marginX: 'auto', maxWidth: '900px' }}>
                <BackToButton callback={handleBackButton} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px', marginTop: '15px' }}>
                    <Typography component="h1" variant="h2">
                        Bank Details
                    </Typography>
                </Box>
                <Stack direction="column" spacing={4}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Account Holder's Name"
                        fullWidth
                        value={account.holderName}
                        onChange={(e) => {
                            updateField('holderName', e.target.value);
                        }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Bank Name"
                        fullWidth
                        value={account.bankName}
                        onChange={(e) => {
                            updateField('bankName', e.target.value);
                        }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Account Number"
                        fullWidth
                        value={account.accountNumber}
                        onChange={(e) => {
                            updateField('accountNumber', e.target.value);
                        }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="IFSC Code"
                        fullWidth
                        value={account.ifscCode}
                        onChange={(e) => {
                            updateField('ifscCode', e.target.value);
                        }}
                    />
                    <Box>
                        <Button onClick={handleSubmit} variant="contained" sx={{ width: 'max-content', display: 'flex', marginLeft: 'auto' }}>
                            Update Bank Details
                        </Button>
                    </Box>
                </Stack>
            </Card>
        </GridLayout>
    );
};

BankDetails.propTypes = {};

export default BankDetails;
