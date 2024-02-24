import AddPhotoAlternateTwoToneIcon from '@mui/icons-material/AddPhotoAlternateTwoTone';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

const UploadImage = (props) => {
    const callback = props.callback;
    const image = props.value ?? [];
    const [files, setFiles] = useState(image);

    const handleChange = (e) => {
        setFiles((prevFiles) => {
            return [...prevFiles, ...Array.from(e.target.files)];
        });
    };
    useEffect(() => {
        if (callback) {
            callback(files);
        }
    }, [files]);

    return (
        <>
            <Input accept="image/*" id="contained-button-file" multiple type="file" sx={{ display: 'none' }} onChange={handleChange} />
            <label htmlFor="contained-button-file">
                <Box sx={{ marginBottom: '8px' }}>Upload Image</Box>
                <Button
                    variant="outlined"
                    component="span"
                    startIcon={<AddPhotoAlternateTwoToneIcon />}
                    sx={{
                        color: 'gray',
                        borderColor: 'gray',
                        '&:hover': {
                            borderColor: 'black',
                        },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '50px',
                        width: '50px',
                    }}
                />
            </label>
        </>
    );
};

export default UploadImage;
