import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, IconButton, Switch, Typography, Grid, Card, TextField, Button } from '@mui/material';
import BackToButton from 'src/components/buttons/BackToButton';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import GridLayout from 'src/layout/GridLayout';
import FoodCodeProvider, { useFoodCodeContext } from 'src/store/Context';

const ProfileDetails = (props) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const { pageState, dispatch } = useFoodCodeContext();

    const [profile, setProfile] = useState({
        cafeName: '',
        ownerName: '',
        mobileNumber: '',
        email: '',
        address: '',
    });

    const updateProfileField = (key, value) => {
        setProfile((prevProfile) => ({
            ...prevProfile,
            [key]: value,
        }));
    };

    const handleSubmit = async () => {};

    const handleBackButton = () => {
        navigate('/account');
    };
    return (
        <GridLayout>
            <Card sx={{ padding: '20px', marginX: 'auto', maxWidth: '900px' }}>
                <BackToButton callback={handleBackButton} />
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px', marginTop: '15px' }}>
                    <Typography component="h1" variant="h2">
                        Profile Details
                    </Typography>
                </Box>
                <Stack direction="column" spacing={4}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Cafe Name"
                        fullWidth
                        value={profile.cafeName}
                        onChange={(e) => {
                            updateProfileField('cafeName', e.target.value);
                        }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Owner Name"
                        fullWidth
                        value={profile.ownerName}
                        onChange={(e) => {
                            updateProfileField('ownerName', e.target.value);
                        }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Contact Number"
                        fullWidth
                        value={profile.email}
                        onChange={(e) => {
                            updateProfileField('mobileNumber', e.target.value);
                        }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Address"
                        fullWidth
                        value={profile.ownerName}
                        onChange={(e) => {
                            updateProfileField('address', e.target.value);
                        }}
                    />
                    <Box>
                        <Button onClick={handleSubmit} variant="contained" sx={{ width: 'max-content', display: 'flex', marginLeft: 'auto' }}>
                            Update Profile
                        </Button>
                    </Box>
                </Stack>
            </Card>
        </GridLayout>
    );
};

ProfileDetails.propTypes = {};

export default ProfileDetails;
