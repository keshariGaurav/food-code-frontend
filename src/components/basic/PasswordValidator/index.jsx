import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, FormControlLabel, Checkbox } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const PasswordValidator = (props) => {
    const theme = useTheme();
    const password = props.password;
    const confirmPassword = props.confirmPassword ?? null;
    const setIsValidPassword = props.setIsValidPassword;
    const [criteria, setCriteria] = useState({
        minLength: false,
        specialChar: false,
        capitalLetter: false,
        lowercaseLetter: false,
        number: false,
        passEqualeConfirmPass: confirmPassword !== null ? false : true,
    });

    const passwordValidation = (password) => {
        const re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;
        setCriteria({
            minLength: password.length >= 8,
            specialChar: /[@$!%*?&]/.test(password),
            capitalLetter: /[A-Z]/.test(password),
            lowercaseLetter: /[a-z]/.test(password),
            number: /\d/.test(password),
            passEqualeConfirmPass: confirmPassword !== null ? password === confirmPassword : true,
        });
        if (confirmPassword !== null && password !== confirmPassword) {
            return false;
        }
        return re.test(password);
    };

    useEffect(() => {
        const res = passwordValidation(password);
        setIsValidPassword(res);
    }, [password, confirmPassword]);

    return (
        <Grid container alignItems="center">
            <Grid item xs={12}>
                <FormControlLabel
                    control={
                        <Checkbox
                            sx={{
                                '&.Mui-checked': {
                                    color: `${theme.palette.primary.main}`,
                                },
                            }}
                            checked={criteria.minLength}
                            disabled
                        />
                    }
                    label="Minimum 8 characters"
                />
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                    control={
                        <Checkbox
                            sx={{
                                '&.Mui-checked': {
                                    color: `${theme.palette.primary.main}`,
                                },
                            }}
                            checked={criteria.specialChar}
                            disabled
                        />
                    }
                    label="At least one special character (@$!%*?&)"
                />
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                    control={
                        <Checkbox
                            sx={{
                                '&.Mui-checked': {
                                    color: `${theme.palette.primary.main}`,
                                },
                            }}
                            checked={criteria.capitalLetter}
                            disabled
                        />
                    }
                    label="At least one capital letter"
                />
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                    control={
                        <Checkbox
                            sx={{
                                '&.Mui-checked': {
                                    color: `${theme.palette.primary.main}`,
                                },
                            }}
                            checked={criteria.lowercaseLetter}
                            disabled
                        />
                    }
                    label="At least one lowercase letter"
                />
            </Grid>
            <Grid item xs={12}>
                <FormControlLabel
                    control={
                        <Checkbox
                            sx={{
                                '&.Mui-checked': {
                                    color: `${theme.palette.primary.main}`,
                                },
                            }}
                            checked={criteria.number}
                            disabled
                        />
                    }
                    label="At least one number"
                />
            </Grid>
            {confirmPassword !== null && (
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                sx={{
                                    '&.Mui-checked': {
                                        color: `${theme.palette.primary.main}`,
                                    },
                                }}
                                checked={criteria.passEqualeConfirmPass}
                                disabled
                            />
                        }
                        label="Confirm Password Matches"
                    />
                </Grid>
            )}
        </Grid>
    );
};

PasswordValidator.propTypes = {
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string,
    setIsValidPassword: PropTypes.func.isRequired,
};

export default PasswordValidator;
