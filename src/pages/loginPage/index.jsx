import { Card, Stack, Box, TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
const Login = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isdisable, setIsdisable] = useState(true);
    const [showPassword, setShowPassword] = useState(false);

    const passwordValidation = (password) => {
        const re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;
        return re.test(password);
    };
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        const isValid = userName.length > 0 && passwordValidation(password);
        setIsdisable(!isValid);
    }, [userName, password]);
    return (
        <Card sx={{ minWidth: 500, minHeight: 400, padding: '20px', margin: '20px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
                <Avatar sx={{ m: 1 }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
            </Box>
            <Stack direction="column" spacing={4} sx={{ width: '80%', marginLeft: '40px' }}>
                <TextField
                    required
                    id="outlined-required"
                    label="Username"
                    fullWidth
                    value={userName}
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Password"
                    fullWidth
                    value={password}
                    type={showPassword ? 'text' : 'password'}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end">
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button variant="contained" disabled={isdisable}>
                    Login
                </Button>
            </Stack>
        </Card>
    );
};

export default Login;
