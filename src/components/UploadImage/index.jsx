import AddPhotoAlternateTwoToneIcon from '@mui/icons-material/AddPhotoAlternateTwoTone';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';

const UploadImage = (props) => {
    const theme = useTheme();
    const callback = props.callback;
    const image = props.value ?? [];
    const [files, setFiles] = useState(image);
    const [imageUrl, setImageUrl] = useState(image);

    const handleChange = (e) => {
        const file = e.target.files[0];
        setFiles(file);
        setImageUrl(URL.createObjectURL(file));
    };
    useEffect(() => {
        if (callback) {
            callback(files);
        }
    }, [files]);

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Input accept="image/*" id="contained-button-file" multiple type="file" sx={{ display: 'none' }} onChange={handleChange} />
            <label htmlFor="contained-button-file">
                <Box sx={{ marginBottom: '8px' }}>
                    <Typography variant="h2" color={theme.palette.grey['700']}>
                        Upload Image
                    </Typography>
                </Box>
                <Button
                    variant="outlined"
                    component="span"
                    startIcon={!imageUrl && <AddPhotoAlternateTwoToneIcon />}
                    sx={{
                        color: 'gray',
                        borderColor: 'gray',
                        '&:hover': {
                            borderColor: 'black',
                        },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '40px',
                    }}
                >
                    {imageUrl ? <img src={imageUrl} alt="Uploaded" style={{ maxHeight: '100%', maxWidth: '100%', marginRight: '5px' }} /> : <></>}
                </Button>
            </label>
        </Box>
    );
};

export default UploadImage;
